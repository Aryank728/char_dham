import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import Blog from './c4dhamblog'
import heroBg from "../assets/c4dham.jpeg"

const Chhota4dham = () => {
    return (
        <>
            <Navbar />
            <div className="relative">
                <img src={heroBg} alt="img" className="w-full h-screen object-cover" />
                <div className="absolute top-0 left-0 w-full h-full  opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className='text-[#f7a772] text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl'>Chhota 4धाम</h1>
                </div>
            </div>
            <div className="container mx-auto p-4 mt-8">
                <p className="text-orange-500 font-poppins lg:py-0 py-4 text-xl text-center">
                    India is a land of diverse pilgrimages, each with its own unique history, significance, and devotees. Millions of devotees flock to these sacred sites with unwavering devotion, seeking eternal bliss and spiritual enlightenment. For many, these yatras are a once-in-a-lifetime journey, undertaken when they have fulfilled their worldly duties and are ready to seek spiritual solace. The Chhota Char Dham yatra, comprising Kedarnath, Yamunotri, Gangotri, and Badrinath, is a revered pilgrimage that holds immense significance in Hinduism. Considered a sacred journey that is essential for spiritual growth, it is deeply ingrained in Hindu religious texts and traditions. Embarking on this yatra is believed to bring devotees closer to the divine, and help them attain moksha, or liberation from the cycle of birth and death.
                </p>
                <h2 className='text-black text-left mt-8 mb-4 font-bold font-poppins lg:py-0 py-4 text-4xl'>
                    What is Chhota Char Dham?
                </h2>
                <p className="text-black text-left font-poppins lg:py-0 py-4 text-xl">
                    Nestled in the majestic Himalayan mountains lie the sacred sites of Chhota Char Dham. While the larger Char Dham comprises four religious and historical places in India - Badrinath, Dwarka, Puri, and Rameshwaram - the Chhota Char Dham is a smaller circuit of four revered destinations in the Uttarakhand region. These sites - Kedarnath, Yamunotri, Gangotri, and Badrinath - are not only geographically proximate but also spiritually connected. According to legend, Adi Shankaracharya, the 8th-century philosopher and theologian, designated these four sites as the Chhota Char Dham, associating each with a different epoch:
                    <li>Kedarnath with the Satyuga, </li>
                    <li>Yamunotri with the Treta Yuga, </li>
                    <li>Gangotri with the Dwapar Yuga, and </li>
                    <li>Badrinath with the Kali Yuga. </li>
                </p>
                <p className='text-black text-left font-poppins lg:py-0 py-4 mt-2 mb-3 text-xl'>
                    This sacred circuit is considered a microcosm of the larger Char Dham, offering devotees a unique opportunity to experience spiritual bliss and liberation.
                    <br /> Let's gather more information about the pilgrims of chhota char dham.
                </p>

            </div>
            <Blog />
            <Footer />
        </>
    )
}

export default Chhota4dham
