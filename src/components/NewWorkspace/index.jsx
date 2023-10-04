import { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/auth";

const NewWorkspace = ({ setCurrentWorkspace, setShowWorkspace }) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const { user } = useAuth();
    const submit = async (e) => {
        e.preventDefault();
        const data = { icon, userId: user.id, title };
        await api.post('workspaces', data).then((res) => {
            setCurrentWorkspace(res.data.id);
        });
        setShowWorkspace(false);
    }

    return (
        <form>
            <div className="mb-3 flex flex-row gap-3 w-full">
                <div className="flex flex-col w-full">
                    <label className="text-sm  font-medium text-gray-900 truncate" htmlFor="title">Title</label>
                    <input id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} className="rounded border-solid border-amber-300 border" autoFocus />
                </div>
                <div className="flex flex-col w-1/2">
                    <label className="text-sm  font-medium text-gray-900 truncate" htmlFor="description">Icon</label>
                    <select onChange={(e) => { setIcon(e.target.value) }} className="rounded border-solid border-amber-300 border" name="" id="">
                        <option value="default">☀ (default)</option>
                        <option value="baloon">🎈</option>
                        <option value="home">🏠</option>
                        <option value="work">💻</option>
                        <option value="studies">📕</option>
                    </select>
                </div>
                <div className="flex flex-col self-end">
                    <button onClick={(e) => submit(e)}><AiOutlinePlusSquare className="text-2xl" /></button>
                </div>
            </div>
        </form>
    );
}

export default NewWorkspace;