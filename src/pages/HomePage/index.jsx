import { useEffect, useState } from "react";
import { api } from "../../services/api.js";
import NewTask from "../../components/NewTask/index.jsx";
import { useAuth } from '../../contexts/auth.jsx';
import SeeMore from "../../components/SeeMore/index.jsx";
import TaskItem from "../../components/TaskItem/index.jsx";
import NewWorkspace from "../../components/NewWorkspace/index.jsx";
import { AiOutlinePlusSquare } from "react-icons/ai";

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [workspaces, setWorkspaces] = useState([]);
    const [tasksCount, setTasksCount] = useState(1);
    const [currentWorkspace, setCurrentWorkspace] = useState(null);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [showInputNew, setShowInputNew] = useState(false);
    const [showNewWorkspace, setShowNewWorkspace] = useState(false);
    const [showNewWorkspaceButton, setShowNewWorkspaceButton] = useState(true);
    const { user } = useAuth();

    const getTasks = async () => {
        if (currentWorkspace != null) {
            await api.get('tasks', {
                params: {
                    take: postsPerPage,
                    workspaceId: currentWorkspace
                }
            }).then(async (res) => {
                setTasks(res.data.tasks);
                setTasksCount(res.data.count);
            });
        } else {
            setTasks([]);
        }
    }

    const getWorkspaces = async () => {
        await api.get('workspaces', {
            params: {
                userId: user.id
            }
        }).then(async (res) => {
            setWorkspaces(res.data.workspaces);
        });
    }


    useEffect(() => {
        getWorkspaces();
        getTasks();
    }, [currentWorkspace, tasks]);
    return (
        <main className='p-5 flex justify-center items-center '>
            <ul className={`divide-y divide-gray-200 ${workspaces.length === 0 ? 'w-1/3' : 'w-2/3'}`}>
                {workspaces.length > 0 && !showInputNew ?
                    <div className="flex justify-center flex-row">
                        <li className="py-3 mb-3 sm:py-4 w-full gap-3 flex flex-row">
                            {(workspaces.length === 0 || !showNewWorkspace) ? <p onClick={() => { setShowNewWorkspace(true) }} className="hover:underline cursor-pointer text-sm  font-medium text-gray-900 truncate ">{workspaces.length === 0 ? 'Create your first workspace' : (showNewWorkspaceButton ? <button onClick={() => setShowNewWorkspace(true)}><AiOutlinePlusSquare className="text-2xl" /></button> : '')}</p> : ''}
                            <div className="w-full flex flex-row">
                                {workspaces.map((workspace) => (
                                    <p onClick={() => { setCurrentWorkspace(workspace.id); setShowNewWorkspace(true); }} className={`cursor-pointer ${workspace.id === currentWorkspace ? 'underline' : ''}`} >{workspace.title === 'Teste' ? '☀   ' : ''}{workspace.title}</p>
                                ))}
                            </div>
                        </li>
                    </div> : ''}

                {showNewWorkspace ? <NewWorkspace setShowNewWorkspace={() => { setShowNewWorkspace() }} setCurrentWorkspace={() => { setCurrentWorkspace() }} /> : ''}
                {!showInputNew && (currentWorkspace != null && currentWorkspace !== -1) ? <li className="py-3 mb-3 sm:py-4 w-full"><p onClick={() => setShowInputNew(true)} className="hover:underline cursor-pointer text-sm  font-medium text-gray-900 truncate ">Click here to add new</p></li> : ''}
                {showInputNew && (currentWorkspace !== null && currentWorkspace !== -1) ? <NewTask currentWorkspace={currentWorkspace} setShowInputNew={() => setShowInputNew()} /> : ''}
                {tasks.length > 0 ? <>
                    {tasks.map((task) => (
                        <TaskItem task={task} />
                    ))}
                    {/* <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} count={count} take={postsPerPage} pagesNumber={pagesNumber} /> */}
                    {tasksCount > postsPerPage ? <SeeMore postsPerPage={postsPerPage} setPostsPerPage={setPostsPerPage} /> : ''}
                </>
                    : ''}
            </ul>
        </main>
    );
}

export default HomePage;