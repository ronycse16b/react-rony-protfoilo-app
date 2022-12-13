import React from 'react';
import './Banner.css'
import background from '../../assets/img/hero-bg.jpg'
import hero from '../../assets/img/hero.png'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="relative lg:h-[690px]">
            <img
                src={background}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />

            <div className="relative bg-gray-900 bg-opacity-75 custom-bg xl:pt-14">
          
                <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-[43px]">
                    <div className="flex flex-col items-center justify-between md:flex-row xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-white">

                            <p className='text-3xl font-bold'>I'm</p>
                            <h1 className='text-6xl font-bold'>REFAAT RONY</h1>
                            <h2 className='text-6xl font-bold'></h2>
                            <div>
                                <TypeAnimation
                                    // Same String at the start will only be typed once, initially
                                    sequence={[
                                        'Web Designer',
                                        1000,
                                        ' Web Developer',
                                        1000,
                                        'Front End Developer',
                                        1000,
                                        'Backend Developer',
                                        1000,
                                    ]}
                                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                    style={{ fontSize: '2em',fontWeight: 'bold' }}
                                    wrapper="span" // Animation will be rendered as a <span>
                                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                                />
                            </div>


                            <a href='https://drive.google.com/file/d/1z9DNUxIMKTGJgexEusxmQJVJumbskTHT/view?usp=share_link'

                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 btn btn-outline btn-primary bg-white lg:mt-5"
                            >
                                Download Resume
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="3000" className="w-full lg:max-w-[33rem] xl:px-8 xl:w-5/12 hidden lg:block ">
                            <img src={hero} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;