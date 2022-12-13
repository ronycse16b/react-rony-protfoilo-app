import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Navber from '../pages/Navber/Navber';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const Main = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        setTimeout(() => {
            setLoading(false);

        }, 2000)



    }, [])

    return (
        <div>

            {
                loading ?

                  <div className='flex justify-center items-center min-h-screen bg-primary text'>
                      <ClimbingBoxLoader
                        color={'#fff'}
                        loading={loading}
                        size={30}

                    />
                  </div>


                    :
                    <>
                        <Navber></Navber>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </>
            }
        </div>
    );
};

export default Main;