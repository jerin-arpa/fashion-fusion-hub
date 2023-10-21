import PropTypes from 'prop-types';
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const { _id, name, brandName, type, rating, price, image } = product;

    return (
        <div>
            <div className='bg-gray-50 grid grid-cols-1 md:grid-cols-2 justify-between lg:h-96'>
                <div>
                    <img className="h-full" src={image} alt="" />
                </div>
                <div className='flex items-center p-5'>
                    <div>
                        <p className='text-3xl text-[#FD0054] font-bold'>{name}</p>

                        <h2 className='text-lg my-2'><span className='font-bold'>Brand Name:</span> {brandName}</h2>
                        <p className='text-lg'><span className='font-bold'>Brand Type:</span> {type}</p>
                        <p className='text-lg mt-2'><span className='font-bold'>Price:</span> ${price}</p>

                        {/* Rating */}
                        <div className='my-3'>
                            <Rating
                                emptySymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="orange"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                }
                                fullSymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="orange"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                                initialRating={rating}
                                readonly
                            />
                        </div>

                        <div className="flex gap-4">
                            <Link to={`/productDetails/${_id}`} >
                                <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold hover:border-[#FD0054]">Details</button>
                            </Link>
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold hover:border-[#FD0054]">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;