import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import heroBg from '../assets/b4dham.jpg';
import Blog from './b4dham_blocks';

const Badaa4dham = () => {
    return (
        <>
            <Navbar />
            <div className="relative">
                <img src={heroBg} alt="img" className="w-full h-screen object-cover" />
                <div className="absolute top-0 left-0 w-full h-full  opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className='text-[#f7a772] text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl'>Badaa 4धाम</h1>
                </div>
            </div>
            <div className="container mx-auto p-4 mt-8">
                <p className="text-orange-500 font-poppins lg:py-0 py-4 text-xl text-center">
                    India is a home to various pilgrimages, each with its own history, rules, parables, and devotees. Millions of devotees reach this sacred place with devotion to get enternal bliss, and some have their pre-considered resons to visit.
                    These yatras are mostly taken up by oldaged people, once they consider themselves free from all important duties of their life. The 4 dham yatra, include Dwaraka, Badrinath, Jagannath, and Rameshwaram. It is conside a religious path that is imperative for humans and inscribed in the religious text themselves.
                </p>
                <h2 className='text-black text-left mt-8 mb-4 font-bold font-poppins lg:py-0 py-4 text-4xl'>
                    What is Badaa Char Dham?
                </h2>
                <p className="text-black text-left font-poppins lg:py-0 py-4 text-xl">
                    Nestled in the Himalayan mountains rests some religious sites of 4 dham yatra. Well four religious and historical places in India such as Badrinath, Dwarka, Puri & Rameshwaram are together the authentic char dham and are pecuilarly present in the four different corners of India. These dhams are defined by Adi shankracharya and hence referred to as four epochs where </p>
                <p className='text-black text-left font-poppins lg:py-0 py-4 mt-2 mb-3 text-xl'>
                    <li >Badrinath demonstrate the dham of Satyuga</li>
                    <li>Rameshwaram Implies the dham of Treta yuga</li>
                    <li>Dwaraka implies the dham of Dwaparyuga and</li>
                    <li>Jagganath Puri as the the dham of Kali Yuga</li>

                    <br />
                    Let's gather more information about the pilgrims of bada char dham.
                </p>

            </div>
            <Blog />
            <Footer />
        </>
    );
};

export default Badaa4dham;
