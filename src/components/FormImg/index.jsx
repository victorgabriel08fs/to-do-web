import img from '../../assets/boneco.png';
import formImg from '../../assets/Union.png';

const FormImg = () => {
    return (
        <div className="flex flex-col w-full h-full  items-center justify-start gap-44">
            <h1 className="z-50 pt-20 pr-10 font-bold text-4xl">My To-Do List</h1>
            <div style={{ backgroundImage: `url(${formImg}) `, backgroundRepeat: 'no-repeat' }} className={`w-1/2 h-1/2 rounded-full flex items-end`}><img className="" src={img} alt="" /></div>
        </div>
    );
}

export default FormImg;