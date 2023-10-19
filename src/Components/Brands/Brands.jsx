import PropTypes from 'prop-types';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brands = ({ brand }) => {
    const { image, brandName } = brand;
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div>
            <div className='bg-white p-10 shadow-xl'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='flex justify-center'>
                    <img className='w-64 h-52 mb-4' src={image} alt="" />
                </div>
                <div data-aos="fade-up" className='flex justify-center'>
                    <h2 className='text-4xl font-bold text-[#FD0054]'>{brandName}</h2>
                </div>
            </div>
        </div>
    );
};

Brands.propTypes = {
    brand: PropTypes.object,
};

export default Brands;