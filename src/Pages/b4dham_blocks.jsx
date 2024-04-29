import React from "react";
import badri from "../assets/badri.jpeg"
import rameshwaram from "../assets/rameshwaram.jpeg"
import jagganath from "../assets/jagannath.jpeg"
import dwaraka from "../assets/dwaraka.jpeg"

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
                            link="/badrinath" // URL for the Badrinath page
                        />
                        <BlogCard
                            CardTitle="Jagganath Puri"
                            CardDescription="Jagannath Puri, a revered pilgrimage site in eastern India, is home to the magnificent Jagannath Temple, dedicated to Lord Jagannath, a manifestation of Lord Vishnu.."
                            image={jagganath}
                            link="/jagganath-puri" // URL for the Jagganath Puri page
                        />
                        <BlogCard
                            CardTitle="Rameshwaram"
                            CardDescription="Rameshwaram, a picturesque island in southern India, is a sacred pilgrimage site where Lord Rama is said to have worshipped Lord Shiva, and is home to the historic Ramanathaswamy Temple."
                            image={rameshwaram}
                            link="/rameshwaram" // URL for the Rameshwaram page
                        />
                        <BlogCard
                            CardTitle="Dwaraka"
                            CardDescription="Dwarka, an ancient city in western India, is a revered pilgrimage site and the kingdom of Lord Krishna, where he is said to have ruled and preached the teachings of the Bhagavad Gita."
                            image={dwaraka}
                            link="/dwaraka" // URL for the Dwaraka page
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
                            <br /> <span className="font-bold"><br /> Click to know more </span>
                        </p>
                    </div>
                </a>
            </div>
        </>
    );
};
