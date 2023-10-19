import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { GiChemicalBolt } from "react-icons/gi";

import image1 from '../../assets/images/1.webp';
import image2 from '../../assets/images/2.webp';
import image3 from '../../assets/images/3.webp';
import image4 from '../../assets/images/4.webp';
import image5 from '../../assets/images/5.webp';
import Marquees from "../../Components/Marquees/Marquees";
import Brands from "../../Components/Brands/Brands";

const Home = () => {

    const loadedBrand = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            {/* Brands Collection */}
            <div>
                <div className="container mx-auto px-5 py-28">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="mb-14 lg:w-2/3">
                            <div className="flex gap-3">
                                <div className="flex">
                                    <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                </div>
                                <p className="mb-4 text-xl ">All Available Brands</p>
                            </div>
                            <h2 className="text-4xl font-bold text-[#FD0054]">A Comprehensive Collection of Available Brands</h2>
                            <p className="mt-5">Step into a realm of diverse and distinguished brands with our curated brand showcase section. Explore an array of renowned and emerging brands across various industries, each boasting its unique story, values, and innovative offerings.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {
                            loadedBrand.map(brand => <Brands key={brand._id} brand={brand}></Brands>)
                        }
                    </div>
                </div>
            </div>


            {/* Deals and discount */}
            <div>
                <div className="py-28 container mx-auto px-5">
                    <div>
                        <div className="mb-10 lg:w-2/3">
                            <div className="flex gap-3">
                                <div className="flex">
                                    <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                </div>
                                <p className="mb-4 text-xl ">Fashion Frenzy</p>
                            </div>
                            <h2 className="text-4xl font-bold text-[#FD0054]">Unbeatable Deals and Discounts Await!</h2>
                            <p className="mt-5 mb-20">Explore a curated selection of clothing, accessories, and more, all at prices that make fashion dreams a reality. Do not miss out on the best in discounted fashion shop now and strut your stuff with confidence!</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="relative">
                            <img className="w-full h-full" src={image2} alt="" />
                            <div className="absolute top-5 right-5">
                                <p className="text-[#FD0054] font-bold">Upto 52%</p>
                                <h2 className="text-3xl text-black">Western <br /> Style</h2>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row gap-5 mb-5">
                                <div className="relative">
                                    <img className="w-full h-full" src={image1} alt="" />
                                    <div className="absolute bottom-5 right-5">
                                        <p className="text-[#FD0054] font-bold">Upto 30%</p>
                                        <h2 className="text-3xl text-black">Enjoy <br /> Summer</h2>
                                    </div>
                                </div>
                                <div className="relative">
                                    <img className="w-full h-full" src={image4} alt="" />
                                    <div className="absolute top-5 left-5">
                                        <p className="text-[#FD0054] font-bold">Upto 48%</p>
                                        <h2 className="text-3xl text-black">Feel the <br /> Winter</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img className="w-full h-[288px]" src={image3} alt="" />
                                <div className="absolute top-5 right-5">
                                    <p className="text-[#FD0054] font-bold">Upto 48%</p>
                                    <h2 className="text-3xl  text-black">Mens <br /> Fashion</h2>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full h-full" src={image2} alt="" />
                            <div className="absolute top-5 right-5">
                                <p className="text-[#FD0054] font-bold">Upto 52%</p>
                                <h2 className="text-3xl text-black">Western <br /> Style</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Blogs */}
            <div>
                <div className="container mx-auto px-5 py-28">
                    <div className="flex flex-col lg:flex-row justify-between mb-14">
                        <div className="lg:w-2/3">
                            <div className="flex gap-3">
                                <div className="flex">
                                    <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                </div>
                                <p className="mb-4 text-xl ">Fashion Showcase</p>
                            </div>
                            <h2 className="text-4xl font-bold text-[#FD0054]">Latest Trends and Must-Have Styles</h2>
                            <p className="mt-5">Welcome to our Fashion Showcase, where style meets substance! Explore the hottest fashion trends and essential wardrobe pieces for men and women. Our carefully curated selection features a variety of clothing and accessories to keep you ahead of the fashion game.</p>
                        </div>


                        <div className="flex items-center">
                            <Link to='/blogs'>
                                <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold">See All Blogs</button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className='bg-white shadow-2xl'>
                            <img className='w-full' src='https://i.ibb.co/56ZyRRB/IMG-20231018-WA0018.jpg' alt="" />
                            <div className='p-5'>
                                <p className='text-[#FD0054] font-bold'>Men/18 October 2023</p>
                                <h2 className='text-2xl font-bold my-2'>Stylish Mens Jacket</h2>
                                <p>A trendy jacket that combines style and warmth for the modern man.</p>
                            </div>
                        </div>

                        <div className='bg-white shadow-2xl'>
                            <img className='w-full' src='https://i.ibb.co/KLNxWv2/IMG-20231018-WA0023.jpg' alt="" />
                            <div className='p-5'>
                                <p className='text-[#FD0054] font-bold'>Women/19 October 2023</p>
                                <h2 className='text-2xl font-bold my-2'>Chic Womens Dress</h2>
                                <p>An elegant dress that exudes sophistication and charm for every occasion.</p>
                            </div>
                        </div>

                        <div className='bg-white shadow-2xl'>
                            <img className='w-full' src='https://i.ibb.co/DbxRSSt/IMG-20231018-WA0019.jpg' alt="" />
                            <div className='p-5'>
                                <p className='text-[#FD0054] font-bold'>Women/21 October 2023</p>
                                <h2 className='text-2xl font-bold my-2'>Fashionable Womens Handbag</h2>
                                <p>A trendy handbag that adds a touch of glamour to any outfit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-10">
                <Marquees></Marquees>
            </div>



            {/* subscribe */}
            <div className="py-20 text-white">
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
        </div >
    );
};

export default Home;
