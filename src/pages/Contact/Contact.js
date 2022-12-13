import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm('service_r5ynaub', 'template_9ch2ig8', form.current, 'y5Hw3tPVgLm6esWbM')
            .then((result) => {
                console.log(result.text);
                window.alert('Mail Send Successfully');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>
            <div className="overflow-hidden bg-white">


                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12" >
                            <img src="https://images.squarespace-cdn.com/content/v1/56012adce4b0cf12162d2a86/1472569189356-KGD5TAI2VUG58XPLP4TH/image-asset.gif" alt="" />
                        </div>

                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="relative">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="766323e1-e594-4ffd-a688-e7275079d540"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10" data-aos="zoom-in-left" data-aos-duration="3000" >
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        <span className='text-primary font-bold text-3xl'>__</span><span className='text-3xl font-bold'>Contact ME</span>
                                    </h3>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="name"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Name
                                            </label>
                                            <input
                                                placeholder="John Doe"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="name"
                                                name="user_name"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                E-mail
                                            </label>
                                            <input name="user_email"
                                                placeholder="john.doe@example.org"
                                                required
                                                type="email"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"

                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Message
                                            </label>
                                            <textarea name="message" className="textarea textarea-primary flex-grow w-full h-22 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" placeholder="Bio"></textarea>

                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline bg-primary focus:outline-none"
                                            >
                                                Submit
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-md font-bold text-black' data-aos="flip-right" data-aos-duration="3000">
                        <span>Name:Refaat Rony</span> <br />
                        <span>Dhaka Bangladesh</span> <br />
                        <span>email:rony.cse.16b@gmail.com</span><br />
                        <span>cell:+880 1773470368</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
