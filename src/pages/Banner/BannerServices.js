import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bservices from './Bservices';

const BannerServices = () => {

    const [services, setService] = useState([]);
    console.log(services);
    useEffect(() => {

        fetch('https://protfolio-server-ronycse16b.vercel.app/banner_services')
            .then(res => res.json())
            .then(data => setService(data))




    }, [])


    return (
        <div>
            <div className='bg-primary'>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                    <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                            <span className="inline-block mb-1 sm:mb-4 text-white">
                                My Projects
                            </span>
                            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                        </h2>
                        <p className="text-gray-100 lg:text-sm lg:max-w-md">
                            Here is a list of projetcs that front-end ,Backend Projects using HTML CSS, Firebase , Tailwind, Daisy UI Mongodb , react js node js , express js etc.
                        </p>
                    </div>
                    <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">

                        {services.map(project => <Bservices key={project.id} project={project}></Bservices>)}

                    </div>

                    <Link to='/projects' className='btn btn-active hover:bg-slate-700'>Explore More   <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg></Link>


                </div>
            </div>
        </div>
    );
};

export default BannerServices;