import { useLoaderData } from 'react-router';
import Cart from '../../Components/Cart/Cart';
import { GiChemicalBolt } from 'react-icons/gi';
import image5 from '../../assets/images/5.webp';
import Marquees from '../../Components/Marquees/Marquees';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

const MyCart = () => {

    const { user } = useContext(AuthContext);
    const carts = useLoaderData();
    const userCarts = carts.filter(item => item.userEmail.toLowerCase() === user.email.toLowerCase());
    const [myCart, setMyCart] = useState(userCarts);

    return (
        <div>
            <div className='mt-10'>
                <div className="flex justify-center gap-3">
                    <div className="flex">
                        <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                    </div>
                    <p className="mb-4 text-xl">My Cart</p>
                </div>
                <div className="flex justify-center">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-center w-2/3">My Cart Collections</h1>
                </div>
            </div>
            <div className='container mx-auto px-5 mt-5'>
                <hr />
            </div>

            <div className='container mx-auto px-5 mt-10'>
                {
                    myCart.length === 0 ? <div className="col-span-2 flex justify-center">
                        <div>
                            <div className="flex justify-center">
                                <BsFillEmojiSmileFill className="text-9xl text-yellow-300 mb-5"></BsFillEmojiSmileFill>
                            </div>
                            <h2 className="
                         text-4xl font-bold text-[#FD0054] text-center"> There are currently <br /> no products added to the cart. </h2>
                        </div>
                    </div>
                        :
                        myCart.map(cart => <Cart key={cart._id} cart={cart} myCart={myCart} setMyCart={setMyCart}></Cart>)
                }
            </div>


            <div className="my-5 mt-20">
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

export default MyCart;