import PropTypes from 'prop-types';

const Brands = ({ brand }) => {
    const { image, brandName } = brand;

    return (
        <div>
            <div className='bg-white p-10 shadow-xl'>
                <div className='flex justify-center'>
                    <img className='w-64 h-52 mb-4' src={image} alt="" />
                </div>
                <div className='flex justify-center'>
                    <h2 className='text-3xl font-bold text-[#FD0054]'>{brandName}</h2>
                </div>
            </div>
        </div>
    );
};

Brands.propTypes = {
    brand: PropTypes.object,
};

export default Brands;