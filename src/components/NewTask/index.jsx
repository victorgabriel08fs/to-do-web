import { useState } from "react";
import { api } from "../../services/api";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useAuth } from "../../contexts/auth";

const NewTask = ({ currentWorkspace,setShowInputNew }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const cleanFields = () => {
        setTitle('');
        setDescription('');
    }
    const submit = async (e) => {
        e.preventDefault();
        await api.post('tasks', { title, description, workspaceId: currentWorkspace });
        cleanFields();
        setShowInputNew(false);
    }

    return (<div className="mb-3 flex flex-row gap-3 w-full">
        <div className="flex flex-col w-full">
            <label className="text-sm  font-medium text-gray-900 truncate" htmlFor="title">Title</label>
            <input id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} className="rounded border-solid border-amber-300 border" autoFocus />
        </div>
        <div className="flex flex-col w-full">
            <label className="text-sm  font-medium text-gray-900 truncate" htmlFor="description">Description</label>
            <input id="description" value={description} onChange={(e) => { setDescription(e.target.value) }} className="rounded border-solid border-amber-300 border" />
        </div>
        <div className="flex flex-col self-end">
            <button onClick={(e) => submit(e)}><AiOutlinePlusSquare className="text-2xl" /></button>
        </div>
    </div>);
}

export default NewTask;