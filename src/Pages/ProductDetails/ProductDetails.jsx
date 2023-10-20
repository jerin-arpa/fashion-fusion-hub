import { useLoaderData, useParams } from "react-router-dom";
import Marquees from "../../Components/Marquees/Marquees";
import image5 from '../../assets/images/5.webp';
import { GiChemicalBolt } from "react-icons/gi";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetails = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);

    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find(product => product._id === id);


    const handleAddToCart = () => {
        const newProduct = { userEmail: user.email, product };

        fetch('https://fashion-fusion-hub-server-cnt9c8hpg-ismat-jerins-projects.vercel.app/myCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <div className="container mx-auto px-5 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="col-span-1">
                    <img className="w-full h-full" src={product.image} alt="" />
                </div>
                <div className="flex items-center col-span-3">
                    <div>
                        <p className='text-3xl text-[#FD0054] font-bold mb-5'>{product.name}</p>

                        <p className='text-lg mt-2'><span className='font-bold'>Price:</span> ${product.price}</p>

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
                                initialRating={product.rating}
                                readonly
                            />
                        </div>

                        <p className='text-lg mt-2'><span className='font-bold'>Description:</span>{product.description}</p>


                        <div className='mt-5'>
                            <button onClick={handleAddToCart} className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold w-full">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-5">
                <Marquees></Marquees>
            </div>

            {/* subscribe */}
            <div className="pb-20 text-white">
                <div className="container mx-auto px-5">
                    <div className="hero py-44 rounded-3xl" style={{ backgroundImage: `url(${image5})` }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center">
                            <div className="w-full text-white my-5">
                                <div className="flex gap-3 justify-center">
                                    <div>
                                        <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-3 text-white">Subscribe</p>
                                </div>
                                <h2 className="md:text-2xl lg:text-4xl font-bold text-[#FD0054] mb-5">Subscribe our Newsletter</h2>

                                <div className="flex justify-start">
                                    <div className="relative">
                                        <input type="text" placeholder="username@site.com" className="input input-bordered w-32 md:w-full lg:w-[350px] rounded-r-none" />
                                        <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white  absolute rounded-l-none">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;