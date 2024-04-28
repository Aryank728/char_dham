import React from 'react';
import d4dham from '../../assets/dwaraka.jpg';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const dwaraka = () => {
    return (
        <>
            <Navbar />
            <div className='relative className="container mx-auto p-4 mt-4'>
                <h1 className='text-[#f7a772] mb-4 font-bold text-center font-poppins lg:py-0 py-4 text-5xl'>
                    Dwarakadhish: <span className='text-blue-500'>The Ancient Kingdom of Lord Krishna</span>
                </h1>
                <img src={d4dham} alt="Badrinath" className='w-full h-auto mb-5' />
                <div className='text-black text-center font-poppins lg:py-0 py-4'>
                    <p>
                        THis temple is located in the cuty of Dwaraka and the state of Gujarat, Dwaraka is one of the holy places in the 4 dham yatras names. This temple is dedicated to Lord Krishna and is situated at an elevation of 12.19m. It is also known as Jagat Mandir and Dwarakadheesh and is called the city of Lord Krishna. This place is present on the bank of the Gomti river in the western lands of the country. The construction of the themple was chalukya style, with the tallest peak og 5.15m. <br />
                        The temple is built on the 72 pillars and has a five-story structure where the flag at the top shows the sun & moon, which showcases the Lord Krishna will stay till the sun and the moon exist on earth. It is changes five times a day. Intrestingly, there are two entrance doors of the temple: <br />
                        <span className='text-center font-bold'> The north entrance door is called the Moksha Door (Door of Salvation), & the south entrance is called the South Dwara (Door to heaven)</span>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>History:</h2>
                    <p className='text-left'>
                        <li>Dwaraka is an ancient city located in modern-day Gujarat, India. <br /></li>
                        <li>TArchaeological excavations have revealed that the city was inhabited around 1500 BCE, during the Late Harappan period.</li>
                        <li>It was a major port city during the Indus Valley Civilization and was known for its trade and commerce.</li>
                        <li>The city was submerged underwater around 1500 BCE, possibly due to a tsunami or earthquake.</li>
                        <li>Excavations have uncovered ruins of an ancient city, including a temple and a port, which are believed to be the remains of Krishna's city.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Story/Myths:</h2>
                    <p className='text-left'>
                        <li>According to Hindu mythology, Lord Krishna, the eighth avatar (incarnation) of Lord Vishnu, founded Dwaraka as his capital after leaving Mathura.<br /></li>
                        <li>Krishna was a king and a spiritual leader who is said to have ruled Dwaraka for many years, making it a prosperous and happy city.</li>
                        <li>The city was said to be made of gold and had beautiful palaces and temples.</li>
                        <li> Krishna's palace was said to be made of gold and silver, with beautiful gardens and fountains.</li>
                        <li>The city was also the place where Krishna met his friend and devotee, Sudama, a poor brahmin who came to visit Krishna with a handful of puffed rice.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Beliefs:</h2>
                    <p className='text-left'>
                        <li>Dwaraka is considered one of the seven ancient cities (Sapta Puri) in Hinduism.<br /></li>
                        <li>It is believed to be the place where Krishna's physical body was left behind after his departure from the world.</li>
                        <li>The city is considered sacred and is a major pilgrimage site for Hindus.</li>
                        <li> Devotees believe that visiting Dwaraka will bring them spiritual enlightenment and liberation.</li>
                        <li>The city is also believed to be the place where Krishna's teachings and legacy continue to inspire and guide humanity.</li>
                        <li>The Bhagavad Gita, a sacred Hindu scripture, is said to have been preached by Krishna in Dwaraka.
                        </li>
                        <span className='font-bold'>Overall, Dwaraka is a city that holds great historical, mythological, and spiritual significance in Hinduism. It is a place where devotees come to seek spiritual enlightenment, liberation, and a deeper connection with Lord Krishna.</span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default dwaraka
