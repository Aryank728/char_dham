import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import badri from '../../assets/Badrinath.jpeg';

const Badrinath = () => {
    return (
        <>
            <Navbar />
            <div className='relative className="container mx-auto p-4 mt-4'>
                <h1 className='text-[#f7a772] mb-4 font-bold text-center font-poppins lg:py-0 py-4 text-5xl'>
                    Badrinath: <span className='text-blue-500'>The Sacred Abode of Lord Vishnu</span>
                </h1>
                <img src={badri} alt="Badrinath" className='mx-auto w-auto md:h-[300px] lg:h-[400px] xl:h-[500px] sm:h-[200px] xs:h-[150px] mb-5' />
                <div className='text-black text-center font-poppins lg:py-0 py-4'>
                    <p>
                        Badrinath located at 50ft above the sea level, with a small cupola on the top and then with a gold gilt roof, is situated in the Uttarkashi district. It is belived to be re-established in the 8th century by Adi Shankara. <br />
                        People usually visit Badrinath in the month of Maha Saptami. The architecture resembles the buddhism vihara (temple) and is considered the abode of Lord Vishnu. The temple is present at an elevation of 3,100 meter at the banks of the Alaknanda river and nestled between Nar and Narayan Mountain ranges.
                        The Main attraction at the temple is the 2.2ft statue of Badrinarayana present at the entrance, which is constructed fron black stone. The spiritual travel through Badrinath and nearby places like Charanpaduka, Vasundhara falls, Bheem Pul and Brahma Kapal provides and exemplary experience. <br />
                        <span className='text-black font-bold mb-5'>Badrinath opens during Akshaya Trituya at 4:30 am in May, and closing takes place on Bhai Dooj and set to occur in November</span>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>History:</h2>
                    <p className='text-left'>
                        <li>Badrinath is one of the oldest Hindu temples in India, with a history dating back to the 7th century CE. The temple's existence can be traced back to the Vedic period, around 500 BCE, when the region was known as "Badrivan," meaning "forest of berries." <br /></li>
                        <li>The temple was built by Adi Shankaracharya, a Hindu philosopher and saint, in 788 CE. Shankaracharya was a prominent figure in Hinduism who traveled across India to propagate the teachings of Advaita Vedanta. He established four mathas (monasteries) in different parts of India, including the Badrinath matha.</li>
                        <li>The temple has undergone several renovations and reconstructions due to natural disasters and invasions. In the 9th century, the temple was renovated by the Gurjara-Pratihara king, Mihir Bhoja, who added the iconic tower and the main entrance gate. In the 16th century, the temple was rebuilt by the Garhwal Kingdom, which added the present-day structure and the golden dome.</li>
                        <li>The temple's architecture is a blend of North Indian and South Indian styles, reflecting the cultural and artistic influences of various dynasties that ruled the region. The temple's design is inspired by the Katyuri style of architecture, which was prevalent in the region during the 7th century CE.</li>
                        <li>The temple complex includes several smaller shrines and temples, including the Adi Shankaracharya Samadhi, the Kedarnath Temple, and the Ganesha Temple.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Story/Myths:</h2>
                    <p className='text-left'>
                        <li>According to legend, Badrinath was the place where Lord Vishnu meditated and performed penance. The myth states that Vishnu was so impressed with the beauty and tranquility of the region that he decided to stay there forever. The region was then known as "Badrivan," which means "forest of berries."</li>
                        <li>The temple's main deity, Badrinath (Lord Vishnu), is believed to have been discovered by Adi Shankaracharya in the Alaknanda River. The legend states that Shankaracharya was on a spiritual journey when he saw a beautiful idol of Vishnu in the river. He retrieved the idol and installed it in the temple.</li>
                        <li>The temple's name "Badrinath" comes from the Sanskrit word "Badri," meaning "berries," which were abundant in the region. According to myth, the berries were so sweet and delicious that even the gods would come to the region to taste them. The region was then known as "Badrikashram," which means "abode of berries."</li>
                        <li>Another myth states that the Pandavas, the heroes of the epic Mahabharata, passed through Badrinath on their way to heaven. The Pandavas are believed to have installed the idol of Lord Badrinath in the temple.</li>
                        <li>The temple is also associated with the legend of the Ganga River. According to myth, the Ganga River was brought to earth by King Bhagirath, who performed penance at Badrinath to please the gods.</li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Belief:</h2>
                    <p className='text-left'>
                        <li>Badrinath is considered one of the most sacred places in Hinduism, and visiting the temple is believed to bring salvation (Moksha). Devotees believe that a visit to Badrinath will free them from the cycle of birth and death.</li>
                        <li> The temple is dedicated to Lord Vishnu, who is worshipped as Badrinath, the preserver of the universe. Vishnu is believed to be the protector of the universe and the guardian of the cosmos.</li>
                        <li>Devotees believe that Lord Badrinath protects and guides them on their spiritual journey. They believe that the lord's blessings will help them overcome obstacles and achieve spiritual enlightenment.</li>
                        <li>The temple's hot springs, known as Tapt Kund, are believed to have medicinal properties and are considered sacred. Devotees believe that taking a bath in the hot springs will cure them of physical and mental ailments.</li>
                        <li> The temple's priests, known as Rawals, are believed to be descendants of Adi Shankaracharya and are responsible for performing daily rituals and ceremonies. The Rawals are highly respected and revered by devotees.</li>
                        <li>The temple is also believed to be a place of spiritual transformation, where devotees can attain spiritual enlightenment and liberation. Devotees believe that the temple's energy is so powerful that it can transform even the most sinful person into a virtuous one.</li>
                    </p>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Badrinath
