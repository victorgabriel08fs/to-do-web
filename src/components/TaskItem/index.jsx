import moment from "moment";
import { AiFillCheckSquare, AiOutlineCheckSquare } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { api } from "../../services/api";

const TaskItem = ({ task }) => {
    const changeTask = async (id) => {
        await api.patch('tasks/' + id + '/change');
    }
    const deleteTask = async (id) => {
        await api.delete('tasks/' + id);
    }
    return (
        <li className="py-3 sm:py-4 max-h-40">
            <div className="flex items-center space-x-4">
                <div className={`flex-1 min-w-0  ${task.status ? 'line-through' : ''}`}>
                    <p className="text-sm font-medium text-gray-900 truncate ">
                        {task.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                        {task.description ?? ''}
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                        {task.user?.name ?? ''}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    {task.status ? <AiFillCheckSquare className="text-xl" onClick={() => { changeTask(task.id) }} /> : <AiOutlineCheckSquare className="text-xl" onClick={() => { changeTask(task.id) }} />}
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    <BsFillTrash3Fill className="text-xl" onClick={() => { deleteTask(task.id) }} />
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    {moment(task.createdAt).format("DD/MM/YY")}
                </div>
            </div>
        </li>
    );
}

export default TaskItem;