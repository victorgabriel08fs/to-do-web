import FormImg from "../../components/FormImg";
import LoginCard from "../../components/LoginCard";


const LoginPage = () => {
    return (
        <main className='flex row w-full h-full'>
            <FormImg />
            <div className="flex flex-col w-full h-full bg-[#e2ce8b] justify-center items-center"><LoginCard /></div>
        </main>
    );
}

export default LoginPage;