import React from 'react'
import kedarnath from "../../assets/kedar.jpeg"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Kedar = () => {
    return (
        <>
            <Navbar />
            <div className='relative className="container mx-auto p-4 mt-4'>
                <h1 className='text-[#f7a772] mb-4 font-bold text-center font-poppins lg:py-0 py-4 text-5xl'>
                    Kedarnath: <span className='text-blue-500'>The Land of Liberation</span>
                </h1>
                <img src={kedarnath} alt="Badrinath" className='mx-auto w-auto md:h-[300px] lg:h-[400px] xl:h-[500px] sm:h-[200px] xs:h-[150px] mb-5' />
                <div className='text-black text-center font-poppins lg:py-0 py-4'>
                    <p>
                        Kedarnath temple located in the Garhwal Himalyans region is specifically dedicated to Shiva. The temple stays closed in the winter from December to March and the deity of the temple is taken and worshipped in the Ukimath till then. The temple is a 22km trek from the Gaurimath and thus is not available on the road itself. It is belived that the temple built by Pandavas and has been considered one of the 12 jyotirlingas, the holiest Shrine of Shiva. <br />
                        <br />Kedarnath affected by the floods of 2013 got the least damage due to the occurance of a large rock among the debris that protected the temple itself. Now, that large rock is known as Bheem Shila. Kedarnath means "Lord of the field" and has a height of 3,583 km. The earliest reference to kedar comes from the Skanda Purana (8th to 9th Century) where the Kedara has been referred to as the place where Shiva released holy water, Ganga from his hair.
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>History:</h2>
                    <p className='text-left'>
                        <li>The Holy Kedarnath Temple is said to be built in 8th century AD by Hindu guru Adi Shankracharya. Shankracharya rebuilt the place where the Pnadavas of Mahabharat fame is believed to constructed a Shiv temple.<br /></li>
                        <li>It is said that Pandavas wanted to go to Lord Shiva for forgivness after killing their Kaurav brothers to atone for their sins. But Lord Shiva did not want to meet them. That's why Lord Shiva hide in Guptkashi.</li>
                        <li>Pandavas & Draupadi spotted a bull that was very unique from the other bulls in Gupt Kashi. Pandava's brother Bheem identified that the bull is none other than Lord Shiva himself.</li>
                        <li>Lord Shiva was hiding from them was in the form of Nandi, the bull. Bheem tried to catch the bull but couldn't succeed, he only caught the tail of the bull.</li>
                        <li>Lord Shiva, who disappeared from Guptkashi reappeared in 5 different forms in five different places.
                            <li>Hump at Kedarnath</li>
                            <li>Face at Rudranath</li>
                            <li>Arms at Rungnath</li>
                            <li>Navel & stomach at Madhyamaheshwaar</li>
                            <li>Hair locks (जटा) at Kalpeshwar</li>
                            And that's how Panch Kedar came into Existance.
                        </li>
                    </p>
                    <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Story/Myths:</h2>
                    <p className='text-left'>
                        <li>Long ago, in the serene environs of Kedarnath, there lived a hermit known for his piety and devotion to Lord Shiva. He spent his days in meditation, seeking enlightenment amidst the Himalayan solitude.<br /></li>
                        <li>One day, while deep in meditation, the hermit heard a rustling sound nearby. Opening his eyes, he saw a magnificent snake, its scales glistening in the sunlight. The snake approached the hermit and spoke in a human voice, revealing itself to be a divine being in serpent form.</li>
                        <li>The serpent explained that it was under a curse and sought the hermit's help to attain salvation. Intrigued and moved by the creature's plight, the hermit agreed to assist.</li>
                        <li>Guided by divine intuition, the hermit embarked on a spiritual journey, performing rigorous penance and invoking the blessings of Lord Shiva. With each prayer and offering, the hermit drew closer to unraveling the mystery of the snake's curse.</li>
                        <li>Finally, after months of unwavering devotion, Lord Shiva appeared before the hermit in a vision. Pleased by his sincerity and compassion, Lord Shiva granted him the power to lift the curse and free the snake from its suffering.</li>
                        <li>Filled with gratitude, the snake shed its serpentine form and transformed into a radiant celestial being. It thanked the hermit for his selfless act of kindness and disappeared into the heavens, leaving behind a divine aura that enveloped the sacred land of Kedarnath.</li>
                        <li>To this day, it is believed that the benevolent presence of the snake-turned-celestial-being continues to watch over Kedarnath, blessing pilgrims with protection, healing, and spiritual guidance as they undertake their journey of faith in the Himalayas.</li>
                    </p>
                </div>
                <h2 className='text-left font-bold text-2xl mt-4 mb-3'>Belief:</h2>
                <p className='text-left'>
                    <li>Hindus believe that visiting Kedarnath and seeking the blessings of Lord Shiva can absolve them of sins and grant them spiritual purification. It is believed that sincere prayers and offerings made at Kedarnath can lead to forgiveness and redemption.<br /></li>
                    <li>Pilgrims undertake the arduous journey to Kedarnath with the belief that it will bring about spiritual transformation and inner peace. The serene environment, surrounded by the majestic Himalayas, is conducive to meditation and self-reflection.</li>
                    <li>The belief in the sanctity of Kedarnath is deeply intertwined with the power of faith. Devotees have faith that their prayers will be answered, and their wishes fulfilled by Lord Shiva, who is believed to be the destroyer of obstacles and the bestower of blessings.</li>
                    <li>Despite the challenges posed by natural disasters such as earthquakes and snowstorms, the belief in the eternal presence of Kedarnath remains unshaken. The temple and its surroundings are seen as symbols of resilience and the enduring power of devotion.</li>
                    <li>Kedarnath holds immense cultural significance not only for Hindus but also for people of diverse faiths and backgrounds. It serves as a symbol of India's rich religious heritage and the universal quest for spiritual enlightenment.</li>
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Kedar