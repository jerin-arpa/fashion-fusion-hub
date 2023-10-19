import { GiChemicalBolt } from 'react-icons/gi';
import image5 from '../../assets/images/5.webp';
import Marquees from '../../Components/Marquees/Marquees';

const MyCart = () => {
    return (
        <div>
            <div className="container mx-auto px-5 py-10">
                <h2>My Cart</h2>


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
        </div>
    );
};

export default MyCart;