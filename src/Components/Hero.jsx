import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import heroBg from '../assets/back.jpg';

export default function Hero() {
    return (
        <div className="bg-cover bg-center bg-no-repeat flex items-right justify-center min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="container mx-auto text-center text-white mt-[400px]">
                <p className="lg:text-4xl font-bold lg:leading-normal font-poppins">Char Dham </p>
                <h1 className="text-[#FFFF00] text-xl font-bold">It's not just about visiting sacred spots; <br /> it's about seeking something deeper, something that can wash away  <br />their sins and bring them closer to spiritual enlightenment.</h1>
                <a href="#about" className="text-white no-underline flex items-right justify-center">
                    <MdKeyboardDoubleArrowDown className="text-2xl" />
                    <p>SCROLL DOWN</p>
                </a>


            </div>
        </div>
    );
}
