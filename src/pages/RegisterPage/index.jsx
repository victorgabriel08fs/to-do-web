import FormImg from "../../components/FormImg";
import RegisterCard from "../../components/RegisterCard";

const RegisterPage = () => {
    return (
        <main className='flex row w-full h-full'>
            <FormImg/>
            <div className="flex flex-col w-full h-full bg-[#e2ce8b] justify-center items-center"><RegisterCard /></div>
        </main>
    );
}

export default RegisterPage;