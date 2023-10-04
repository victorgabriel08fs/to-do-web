import { useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { Link, useNavigate } from 'react-router-dom';
const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const { Login } = useAuth();
    const submit = async (e) => {
        e.preventDefault();
        var data = { email, password };
        await Login(data, remember);
        navigate('/');
    }
    return (
        <>
            <h1 className="text-5xl font-medium mb-10 text-white text-center">Login</h1>
            <div
                className="bg-transparent  rounded-lg w-1/2 p-4 sm:p-6 lg:p-8 ">
                <form onSubmit={(e) => { submit(e) }} className="flex flex-col space-y-6" action="#">
                    <div>
                        <label for="email" className="text-lg font-medium text-white">Email</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" id="email" className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label for="password" className="text-lg font-medium block  text-white">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="••••••••" className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 " required="" />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" value={remember} onChange={(e) => { setRemember(e.target.checked) }} aria-describedby="remember" type="checkbox" className="check bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded " required="" />
                            </div>
                            <div className="text-sm ml-3">
                                <label for="remember" className="text-sm font-medium  text-white">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-white hover:underline ml-auto">Forget Password?</a>
                    </div>
                    <button type="submit" className="text-white self-center bg-[#937f3e] hover:bg-[#6c5d2a] font-medium rounded-md text-lg w-2/5 px-5 py-2.5 text-center">Enter</button>
                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-b border-white"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-[#e2ce8b] px-4 text-md font-semi text-white">OR</span>
                        </div>
                    </div>
                    <Link to="/register" className="self-center text-[#937f3e] hover:text-[#6c5d2a] font-medium text-lg w-2/5 px-5 py-2.5 text-center">Register</Link>
                </form>
            </div>
        </>
    );
}
export default LoginCard;