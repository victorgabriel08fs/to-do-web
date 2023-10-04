import { useState } from "react";
import { GoChecklist } from "react-icons/go";
import { useAuth } from "../../contexts/auth";

const Navbar = () => {
    const [dropped, setDropped] = useState(false);
    const [onDrop, setOnDrop] = useState(false);
    const { Logout, user } = useAuth();
    return (<header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
        <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
            <div className="flex flex-row items-center gap-3">
                <h1 className="font-bold text-2xl">My To-do List</h1><GoChecklist className="text-3xl text-yellow-500" />
            </div>
            <div className="relative ml-3">
                <div>
                    <button onMouseLeave={() => setTimeout(() => {
                        if (!onDrop)
                            setDropped(false)
                    }, 2000)} onMouseEnter={() => { setDropped(true) }} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                </div>


                {dropped ? <div onMouseLeave={() => {
                    setTimeout(() => {
                        setDropped(false)
                    }, 2000); setOnDrop(false);
                }} onMouseEnter={() => { setDropped(true); setOnDrop(true); }} className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <p className="text-left  block px-4 py-2 cursor-default text-sm text-gray-700 w-full">Hello, {user.name.split(' ')[0]}</p>
                    <hr />
                    {/* <a href="#" className="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a> */}
                    {/* <a href="#" className="hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a> */}
                    <button onClick={() => { Logout() }} className="text-left hover:bg-gray-200 block px-4 py-2 text-sm text-gray-700 w-full" role="menuitem" tabindex="-1" id="user-menu-item-2">Logout</button>
                </div> : ''}
            </div>
        </div>
    </header >);
}

export default Navbar;