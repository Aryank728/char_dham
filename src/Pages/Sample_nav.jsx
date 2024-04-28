import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import bgImg from '../assets/back.jpg';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-cover lg:relative sticky z-20" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container mx-auto lg:px-6">
                <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
                    <div className="flex flex-col gap-y-4 lg:w-1/3">
                        <span className="flex items-center gap-x-2 font-bold text-2xl">
                            <h1 className="font-popoppins text-white text-3xl font-bold">4
                                <span className="text-[#ce8a5c]">धाम</span>
                            </h1>
                        </span>
                    </div>
                    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-yellow-500">
                        <a href="#" className="leading-normal text-lg no-underline text-white">Home</a>
                        <a href="#About" className="leading-normal text-lg no-underline text-white">About</a>
                        <a href="#" className="leading-normal text-lg no-underline text-white">History</a>
                        <a href="#" className="leading-normal text-lg no-underline text-white">Gallery</a>
                        <a href="#" className="leading-normal text-lg no-underline text-white">Contact Us</a>
                    </ul>
                    {/* <div className="lg:block hidden">
                        <TbGridDots className="text-[#ce8a5c] text-4xl" />
                    </div> */}
                    <div onClick={showDropdown} className="lg:button text-[22px] cursor-pointer text-black">
                        {dropdown ? <MdClose /> : <HiMenuAlt3 />}
                    </div>
                </div>

                {dropdown && (
                    <div onClick={showDropdown} className="lg:hidden w-full h-full fixed top-24 bg-cover ease-in-out duration-100" style={{ backgroundImage: `url(${bgImg})` }}>
                        <div className="w-full h-[320px] flex-col items-baseline pt-8 gap-4">
                            <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8 text-yellow-500">
                                <a href="#" className="leading-normal text-lg no-underline text-white">Home</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Explore</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Articles</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Gallery</a>
                                <a href="#" className="leading-normal text-lg no-underline text-white">Contact</a>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
