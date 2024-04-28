import React from 'react'
import ganga from "../../assets/Ganga.jpeg"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Ganga = () => {
    return (
        <>
            <Navbar />
            <div className='relative className="container mx-auto p-4 mt-4'>
                <h1 className='text-[#f7a772] mb-4 font-bold text-center font-poppins lg:py-0 py-4 text-5xl'>
                    Gangotri: <span className='text-blue-500'>A journey to the origin</span>
                </h1>
                <img src={ganga} alt="Badrinath" className='mx-auto w-auto md:h-[300px] lg:h-[400px] xl:h-[500px] sm:h-[200px] xs:h-[150px] mb-5' />
                <div className='text-black text-center font-poppins lg:py-0 py-4'>
                    <p>
                        Gangotri, 99km from Uttarkashi district, is a Hindu pilgrip town. Located on the great Himalayas, with a height of 3,100 m is known to be the origin of the Gangas river. Intrestingly, this river is known as Bhagirathi here and is known as Ganga itself from Devprayag.<br />
                        Completely dedicated to the goddess Ganga, the temple has a sacred stone where King Bagirathi worshipped Lord Shiva and got goddess Ganga in the form of a river to dissolve all the sins of his predecessors. It is also belived that great Pandavas had performed the great "Deva Tagna" here in Mahabharata.
                        <span className='font-bold'>The temple stays open between May to November. For the rest of months, the goddess is shifted to the village of Mukhba in the harsh winters.</span>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>History:</h2>
                    <p className='text-left'>
                        <li>Gangotri Temple, located in the Uttarkashi district of Uttarakhand, India, stands as a symbol of devotion to Goddess Ganga.<br /></li>
                        <li>Constructed in the early 18th century by a Gorkha General named Amar Singh Thapa, the temple is renowned for its architectural grandeur and spiritual significance.</li>
                        <li>Throughout its history, the Gangotri Temple has undergone several renovations and restorations to preserve its cultural heritage and ensure its continued sanctity as a place of worship.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Myth/Story:</h2>
                    <p className='text-left'>
                        <li>Hindu mythology tells the story of Goddess Ganga's descent from heaven to earth at the behest of King Bhagiratha, who sought to cleanse the sins of his ancestors.</li>
                        <li>Recognizing the immense force of Ganga's descent, Lord Shiva intervened, catching her in his locks to prevent her from flooding the earth with her divine waters.</li>
                        <li>Bhagiratha's penance and prayers pleased Lord Shiva, who ultimately released Ganga from his locks, allowing her to flow as the river we know today.</li>
                        <li>Gangotri is believed to be the place where Ganga descended to earth, and the temple serves as a sacred site commemorating this divine event, attracting pilgrims and devotees from far and wide.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Belief:</h2>
                    <p className='text-left'>
                        <li>Gangotri Temple holds a revered position as one of the Char Dham pilgrimage sites in India, along with Yamunotri, Kedarnath, and Badrinath.</li>
                        <li>Devotees believe that bathing in the holy waters of the Ganges at Gangotri can wash away sins and purify the soul, leading to spiritual liberation.</li>
                        <li>The journey to Gangotri is considered a sacred pilgrimage, offering devotees the opportunity to connect with the divine presence of Goddess Ganga and seek her blessings.</li>
                        <li>Surrounded by the majestic peaks of the Himalayas, the temple's serene and picturesque surroundings further enhance its spiritual significance, creating an atmosphere of tranquility and reverence for pilgrims and visitors alike.</li>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ganga
