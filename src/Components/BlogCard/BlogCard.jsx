import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {
    const { image, fashion, date, title, details } = blog;
    return (
        <div className='bg-white shadow-2xl'>
            <img className='w-full' src={image} alt="" />
            <div className='p-5'>
                <p className='text-[#FD0054] font-bold'>{fashion}/{date}</p>
                <h2 className='text-2xl font-bold my-2'>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object,
};

export default BlogCard;



