import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { image, name } = brand;
    return (
        <div className='border-4 rounded-full h-72 bg-white'>
            <div className='flex justify-center mt-14'>
                <img className='w-40 h-32 mb-4' src={image} alt="" />
            </div>
            <div className='flex justify-center'>
                <h2 className='text-3xl font-bold text-[#FD0054]'>{name}</h2>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
};

export default BrandCard;