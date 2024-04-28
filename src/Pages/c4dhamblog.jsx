import React from "react";
import badri from "../assets/badri.jpeg"
import kedar from "../assets/k4dham.jpeg";
import gangotri from "../assets/g4dham.jpeg"
import yamunotri from "../assets/y4dham.jpeg"

const Blog = () => {
    return (
        <>
            <section className="bg-white container mx-auto p-4 mt-8">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <BlogCard
                            CardTitle="Badrinath"
                            CardDescription="Badrinath, nestled in the Himalayas, is a sacred pilgrimage site dedicated to Lord Vishnu, where devotees flock to seek spiritual enlightenment and bliss. ."
                            image={badri}
                            link="/badrinath"
                        />
                        <BlogCard
                            CardTitle="Kedarnath"
                            CardDescription="Kedarnath, nestled in the Garhwal Himalayas, is a sacred pilgrimage site and one of the twelve Jyotirlingas, dedicated to Lord Shiva. The stunning Kedarnath Temple, surrounded by snow-capped peaks, is a testament to India's rich spiritual heritage."
                            image={kedar}
                            link="/kedarnath"
                        />
                        <BlogCard
                            CardTitle="Gangotri"
                            CardDescription="Gangotri, located in the Uttarkashi district of Uttarakhand, is a sacred Hindu pilgrimage site and the source of the Ganges River. The Gangotri Temple, dedicated to Goddess Ganga, is a stunning example of ancient Indian architecture and offers breathtaking views of the surrounding mountains and the Bhagirathi River."
                            image={gangotri}
                            link="/Gangotri"
                        />
                        <BlogCard
                            CardTitle="Yamunotri"
                            CardDescription="Yamunotri, situated in the Uttarkashi district of Uttarakhand, is a revered Hindu pilgrimage site and the source of the Yamuna River. The Yamunotri Temple, dedicated to Goddess Yamuna, is a beautiful example of ancient Indian architecture and offers breathtaking views of the surrounding mountains."
                            image={yamunotri}
                            link="/Yamunotri"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;

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
                            {CardDescription}
                        </p>
                    </div>
                </a>
            </div>
        </>
    );
};
