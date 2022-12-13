import React from 'react';
import { Link } from 'react-router-dom'
const Bservices = ({ project }) => {
    const { img1, _id, title } = project;
    return (

        <>
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={img1}
                    alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 justify-center items-center">
                    <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
                    <p className="text-sm tracking-wide text-gray-300">
                        <Link to={`details/${_id}`} className='btn btn-primary'>More details</Link>
                    </p>
                </div>
            </div>
        </>

    );
};

export default Bservices;