import React from 'react';
import { Link } from 'react-router-dom';
import KedatImg from '../assets/Badaa_char.jpg';
import JagannathImg from '../assets/chhota_char.jpeg';

const About = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto py-2">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">CHAR DHAM</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                    <div className="col-span-2 flex flex-col ">
                        <p className="text-orange-500 mb-8 place-self-center text-lg leading-relaxed font-poppins items-center">
                            Char Dham are the four places in India with high pilgrimage importance. Adi Shankaracharya defined the term Char Dham as the three Vaishnavite, than one Shaivite and the last a state of mixed ones. It is some of the most holy places that a Hindu should visit, at least once in a lifetime. The four Hindu temples are lying across the four corners of India. The Hindu pilgrimage considers it sacred to travel across India, visiting these holy temples. They believe that their religion demands that they visit these places at least once in their lifetime. This trip has a traditional method of starting the journey from the east, then moving up in a clockwise direction. Different pilgrimage tours and Char Dham tourism organize this journey to these places. </p>
                        <p className="text-orange-500 mb-8 place-self-center text-lg leading-relaxed font-poppins items-center">
                            India is a land of many pilgrimage sites that lures not only the domestic travellers, but international tourists also. And one such revered pilgrimage is the Char Dham Yatra that takes you on a spiritual journey like no other. As per the Hindu beliefs, a pilgrimage to these sacred destinations is believed to give you salvation, or what is often referred to as moksha.
                            The Char Dham Yatra in India comprises <span className='font-bold'> Chota Char Dham and the Bada Char Dham.</span>
                        </p>
                        <div className="col-span-10 md:col-span-10 flex items-center justify-center bg-white rounded-lg shadow-md p-69 mb-10">
                            <img src={KedatImg} alt="Yamunotri" className="w-64 md:h-full rounded-lg  " />
                            <div className="ml-4">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">Badaa Char Dham</h2>
                                <p className="text-gray-700 mb-4">
                                    The Bada Chardham or the complete Chardham yatra is a pilgrimage that covers all four directions of India. It is one of the most sacred pilgrimage its four pillars in the form of the Badrinath Dham in Uttarakhand, Puri Dham in Odisha, Rameshawaram Dham in Tamil Nadu, and the Dwarkadeesh Dham in Gujarat. One often starts the tour from the North direction.
                                </p>
                                <Link to="/bada4dham">
                                    <button className="bg-orange-500 text-white px-4 py-2 mb-2 rounded-md hover:bg-orange-600" >Know More</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-10 md:col-span-10 flex items-center justify-center bg-white rounded-lg shadow-md p-69 mb-10">
                            <img src={JagannathImg} alt="Badrinath" className="w-64 md:h-full rounded-lg" />
                            <div className='ml-4'>
                                <h2 className="text-2xl font-bold mb-2  text-gray-800">Chhota Char dham</h2>
                                <p className="text-gray-700 mb-4">
                                    This yatra is known to be the most auspicious yatra according to Hindu mythology. Ideally, it is said to be a good omen if the yatra is taken from the West to East direction, with the order as Yamunotri, Gangotri, Kedarnath, and then finally Badrinath. However, one can start from any of the holy spots, given the connectivity with major cities for all these four spots.
                                </p>
                                <Link to='/chhota4dham'>
                                    <button className="bg-orange-500 text-white px-4 py-2 mb-2 rounded-md hover:bg-orange-600">Know More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
