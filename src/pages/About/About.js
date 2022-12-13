import React from 'react';
import about from '../../assets/img/about.jpg';
import SkillBar from 'react-skillbars';

const About = () => {
    const skills = [
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 90 },
        { type: 'Tailwind css', level: 80 },
        { type: 'Javascript', level: 60 },
        { type: 'React js', level: 82 },
        { type: 'Firebase', level: 75 },
        { type: 'Node js', level: 50 },
        { type: 'Express js', level: 50 },
        { type: 'Mongo DB', level: 55 },

    ];
    const colors = {
        bar: "#EF233C",
        title: {
            text: "#fff",
            background: "#EF233C"
        }
    };
    return (
        <div >
            <div className="overflow-hidden  " id='about'>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div>
                        <h1 className='text-black text-2xl font-bold '><span className='text-primary font-bold text-3xl'>__</span> LEARN ABOUT ME:</h1>
                        <p className='italic py-5'>Hi! this is Refaat Rony. Accomplished web developer with 1 year of experience in designing and maintaining websites. Recognized for leadership and collaborative abilities when working in team settings. Motivated to provide clients with user-friendly applications Technical skills

                            HTML
                            CSS
                            JavaScript
                            Web applications
                            Authotication
                            node js ,mongo DB, Express js ,firebase <span className='font-bold'>Education: Bachelor of Computer Science Engineering (CSE)</span> </p>
                    </div>
                    <div className="flex flex-col items-center  xl:flex-row">
                        <div data-aos="zoom-in-up" data-aos-duration="3000" className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                            <img src={about} alt="" />

                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="relative">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block text-primary"
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
                                <div data-aos="fade-left" data-aos-duration="3000"
                                    className="relative bg-white text-accent  p-7 sm:p-10" >
                                    <h1 className='text-black font-bold pb-2'>Skills:</h1>
                                    <SkillBar skills={skills} colors={colors} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;