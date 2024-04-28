import React from 'react';
import j4dham from '../../assets/j4dham.jpg';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const jagganath = () => {
    return (
        <>
            <Navbar />
            <div className='relative className="container mx-auto p-4 mt-4'>
                <h1 className='text-[#f7a772] mb-4 font-bold text-center font-poppins lg:py-0 py-4 text-5xl'>
                    Jagannath: <span className='text-blue-500'>Lord of the Universe</span>
                </h1>
                <img src={j4dham} alt="Badrinath" className='w-full h-auto mb-5' />
                <div className='text-black text-center font-poppins lg:py-0 py-4'>
                    <p>
                        Puri, a sacred coastal city in the state of Odisha, is one of the Chardham's names. The temple is known for its grand Rath Yatra, Which Occurs Every Year and gathers innumerable devotees traveling for almost 3km. The temple has Lord Jagannath, a form of Lord Vishnu, who is the supreme divinity in Hinduism. The deity here is built op of woo, unlike the others, like stone and metal icons, which too are replaced every 12 or 19 years. The temple complex was built numerous times by king Anantavarman Chodaganga in the 10th century CE for thr Gajapati dynasty kings. <br />
                        The Jagannath Temple is considered one of the four holiest pilgrimage sites in Hinduism. The temple is considered a symbol of the unity of Hinduism, as it is dedicated to the worship of three deities - Jagannath, Subhadra, and Balabhadra.
                        The temple is famous for its annual Rath Yatra (Chariot Festival), which attracts millions of devotees from around the world. During the festival, the deities are taken out of the temple and placed on giant chariots, which are then pulled by the devotees through the streets of Puri. <br />
                        Visiting this majestic place will surely provide you with one of the best experiences, including the best sunrise and sunset at chilika lake. You can also watch popular beaches like Puri and Swargadwr beach, and the best tradition and culture to watch at Raghuraj artist village. One can also explore Bhubneshwar through various crafts like palm leaf engravings, stone and wood carvings, Tussar paintings, and wooden masks. If you are into architechtural arts and Marvel, Konark is the best place for you to visit in August.
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>History:</h2>
                    <p className='text-left'>
                        <li>The Jagannath Temple was first built by King Indradyumna in the 10th century CE.<br /></li>
                        <li>The temple was later destroyed by Bakhtiyar Khalji in the 12th century CE.</li>
                        <li>The temple was rebuilt by Anantavarman Chodaganga in the 10th century CE.</li>
                        <li> The temple complex was further developed by subsequent kings, including those of the Ganga and Gajapati dynasties.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Story/Myths:</h2>
                    <p className='text-left'>
                        <li>King Indradyumna wanted to find the mysterious image of Jagannath (a form of Vishnu). Vishnu instructed the king to find a floating log on the seashore and make an image from its trunk.<br /></li>
                        <li>The king searched far and wide and finally found the log, which was said to be the remains of the divine being, Narasimha.</li>
                        <li>The temple was rebuilt by Anantavarman Chodaganga in the 10th century CE.</li>
                        <li> The log was carved into the image of Jagannath, Subhadra, and Balabhadra, which are now worshipped at the temple.</li>
                        <li> The original image of Jagannath was manifested near a banyan tree on the seashore in the form of an Indranila Mani (Blue Jewel).</li>
                        <li> The jewel was so dazzling that it could grant instant moksha (liberation), so the deity Dharma (or Yama) wanted to hide it in the earth.</li>
                        <li> The images of Jagannath, Subhadra, and Balabhadra are made from the sacred neem logs, known as daru, which are said to have been found on the seashore.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Beliefs:</h2>
                    <p className='text-left'>
                        <li>The Jagannath Temple is a sacred pilgrimage site for Hindus, particularly those following the Vaishnavite tradition.<br /></li>
                        <li>The temple is dedicated to the worship of Jagannath (a form of Vishnu), Subhadra (the goddess of beauty), and Balabhadra (the god of strength).</li>
                        <li>The deities are adorned with different clothing and jewels according to the season, and are worshipped with great devotion by the devotees.</li>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default jagganath
