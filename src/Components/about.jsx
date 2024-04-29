import React from 'react';
// import { Link } from 'react-router-dom';
import KedatImg from '../assets/Badaa_char.jpg';
import JagannathImg from '../assets/chhota_char.jpeg';

const About = () => {
    return (
        <>
            <section className="bg-white container mx-auto p-4 mt-8">
                <div className="container">
                    <p className="text-orange-500 mb-8 place-self-center text-lg leading-relaxed font-poppins items-center">
                        Char Dham are the four places in India with high pilgrimage importance. Adi Shankaracharya defined the term Char Dham as the three Vaishnavite, than one Shaivite and the last a state of mixed ones. It is some of the most holy places that a Hindu should visit, at least once in a lifetime. The four Hindu temples are lying across the four corners of India. The Hindu pilgrimage considers it sacred to travel across India, visiting these holy temples. They believe that their religion demands that they visit these places at least once in their lifetime. This trip has a traditional method of starting the journey from the east, then moving up in a clockwise direction. Different pilgrimage tours and Char Dham tourism organize this journey to these places. </p>
                    <p className="text-orange-500 mb-8 place-self-center text-lg leading-relaxed font-poppins items-center">
                        India is a land of many pilgrimage sites that lures not only the domestic travellers, but international tourists also. And one such revered pilgrimage is the Char Dham Yatra that takes you on a spiritual journey like no other. As per the Hindu beliefs, a pilgrimage to these sacred destinations is believed to give you salvation, or what is often referred to as moksha.
                        The Char Dham Yatra in India comprises <span className='font-bold'> Chota Char Dham and the Bada Char Dham.</span>
                    </p>
                    <div className="-mx-4 flex flex-wrap">
                        <BlogCard
                            CardTitle="Badaa 4 Dham"
                            CardDescription="The Bada Chardham or the complete Chardham yatra is a pilgrimage that covers all four directions of India. It is one of the most sacred pilgrimage its four pillars in the form of the Badrinath Dham in Uttarakhand, Puri Dham in Odisha, Rameshawaram Dham in Tamil Nadu, and the Dwarkadeesh Dham in Gujarat. One often starts the tour from the North direction."
                            image={KedatImg}
                            link="/bada4dham" // URL for the Jagganath Puri page
                        />
                        <BlogCard
                            CardTitle="Chhota 4 Dham"
                            CardDescription="This yatra is known to be the most auspicious yatra according to Hindu mythology. Ideally, it is said to be a good omen if the yatra is taken from the West to East direction, with the order as Yamunotri, Gangotri, Kedarnath, and then finally Badrinath. However, one can start from any of the holy spots, given the connectivity with major cities for all these four spots."
                            image={JagannathImg}
                            link="/chhota4dham" // URL for the Badrinath page
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

const BlogCard = ({ image, CardTitle, CardDescription, link }) => {
    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <a href={link} className="block">
                    <div className="overflow-hidden rounded">
                        <img
                            src={image}
                            alt=""
                            className="h-64 w-full object-cover"
                        />


                    </div>
                    <div className="mt-4">
                        <h3>
                            <a href={link} className="text-lg font-semibold text-dark hover:text-primary dark:text-black">
                                {CardTitle}
                            </a>
                        </h3>
                        <p className="text-sm text-body-color dark:text-dark-6">
                            {CardDescription} <p className='font-bold'><br /> Click Here to know more</p>
                        </p>
                    </div>
                </a>
            </div>
        </>
    );
};
