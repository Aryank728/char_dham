import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import yamuna from "../../assets/Yamuna.jpeg"

const Yamuna = () => {
    return (
        <>
            <Navbar />
            <div className='relative className="container mx-auto p-4 mt-4'>
                <h1 className='text-[#f7a772] mb-4 font-bold text-center font-poppins lg:py-0 py-4 text-5xl'>
                    Yamunotri: <span className='text-blue-500'>The Pilgrim's Paradise</span>
                </h1>
                <img src={yamuna} alt="Badrinath" className='mx-auto w-auto md:h-[300px] lg:h-[400px] xl:h-[500px] sm:h-[200px] xs:h-[150px] mb-5' />
                <div className='text-black text-center font-poppins lg:py-0 py-4'>
                    <p>
                        Yamunotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated at an altitude of 3,293 metres (10,804 ft) in the Garhwal Himalayas in District Uttarkashi. It is one of the four sites in Char Dham pilgrimage of Uttarakhand. The sacred shrine of Yamunotri, source of the river Yamuna, is the westernmost shrine in the Garhwal Himalayas, perched atop a flank of Bandar Poonch Parvat. The chief attraction at Yamunotri is the temple devoted to the Goddess Yamuna and the holy thermal springs at Janki Chatti (7 km. Away).
                        <br />The small mountain hamlet, with the Yamunotri Temple at its centre, attracts thousands of devotees every year and is the commencing point of the Char Dham Yatra pilgrimage (May to October), which proceeds from Yamunotri to Gangotri and finally to Kedarnath and Badrinath. Lodged in a narrow gorge, close to the source of the Yamuna, the Yamunotri Temple is dedicated to Yamuna, the second-most sacred river after the Ganges. A dip in River Yamuna is said to protect one from untimely death.  Devotees either walk or ride a palanquin or a pony to reach the temple (around 3,233 m above sea level) from Janki Chatti, a steep trek of about 3 km that takes about 3 hours.
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>History:</h2>
                    <p className='text-left'>
                        <li>Yamunotri Temple is situated in the Uttarkashi district of Uttarakhand, India, nestled amidst the majestic Himalayas.<br /></li>
                        <li>The temple is believed to have been built in the 19th century by Maharani Guleria of Jaipur, who contributed to its construction and renovation.</li>
                        <li>Over the centuries, the temple has undergone several renovations and rebuilds due to natural calamities such as earthquakes, snowstorms, and landslides. Despite these challenges, devotees have continued to maintain and preserve the sanctity of the temple.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Myth/Story:</h2>
                    <p className='text-left'>
                        <li>According to Hindu mythology, Yamuna is the daughter of the Sun God, Surya, and Sangya, the goddess of consciousness. She is revered as a sacred river and is often depicted as a goddess riding a tortoise.</li>
                        <li>Legend has it that Yamuna descended to Earth from the heavens to cleanse the sins of King Sagar's sons. The sage Kapila had turned the sons to ashes, and Yamuna's waters were believed to have purified their souls.</li>
                        <li>The Yamunotri temple is located near the Champasar Glacier, where the Yamuna River originates. It is here that devotees believe they can connect with the divine energy of Goddess Yamuna and seek her blessings.</li>
                        <li>Adjacent to the temple is the Surya Kund, a natural hot water spring believed to be the abode of the Sun God, Surya. Pilgrims often take a dip in the holy waters of Surya Kund before entering the temple, as it is considered auspicious and purifying.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Belief:</h2>
                    <p className='text-left'>
                        <li> Bathing in the holy waters of the Yamuna River is believed to cleanse one of their sins and purify their soul. Devotees undertake this sacred ritual with reverence and devotion, seeking spiritual purification and blessings from Goddess Yamuna.</li>
                        <li> Devotees offer prayers, perform rituals, and make offerings at the Yamunotri Temple to seek the blessings of Goddess Yamuna for prosperity, health, and well-being. It is believed that the goddess grants the wishes of her devotees and protects them from harm.</li>
                        <li>The journey to Yamunotri is considered a sacred pilgrimage, and devotees undertake it with utmost devotion and faith. The trek to the temple, surrounded by pristine natural beauty and serene landscapes, is seen as a spiritual odyssey that strengthens one's connection with the divine.</li>
                        <li>The Yamunotri Temple and the Yamuna River hold immense cultural and religious significance for Hindus. They symbolize purity, divinity, and the eternal cycle of life, reinforcing the deep-rooted spiritual beliefs and traditions of the Hindu faith.</li>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Yamuna
