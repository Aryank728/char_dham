import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Aboutus = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_x8w0cvf', 'template_4sxlz1o', form.current, {
                publicKey: 'DVUJRNCOOPvGFcr-a',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
        <>
            <Navbar />
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
                    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
                        <div className="mb-4">
                            <p className='mb-4 text-xl'>
                                We're delighted to connect with you! We value your feedback, questions, and suggestions as they help us refine and improve our offerings. Whether you have inquiries about our services, suggestions for collaboration, or simply want to say hello, we're all ears. Feel free to reach out to us via the form above, and we'll get back to you as soon as possible. Thank you for being a part of our journey, and we look forward to hearing from you!
                            </p>
                            <label className="block mb-2" htmlFor="full_name">Full Name:</label>
                            <input type="text" id="full_name" name="from_name" placeholder="Full Name" required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="email">Email:</label>
                            <input type="email" id="email" name="user_email" placeholder="Email" required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject" required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2" htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" placeholder="Message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-2">Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Aboutus
