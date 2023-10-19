import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { GiChemicalBolt } from "react-icons/gi";

import image1 from '../../assets/images/1.webp';
import image2 from '../../assets/images/2.webp';
import image3 from '../../assets/images/3.webp';
import image4 from '../../assets/images/4.webp';
import image5 from '../../assets/images/5.webp';
import BlogCard from "../../Components/BlogCard/BlogCard";
import Marquees from "../../Components/Marquees/Marquees";

const Home = () => {

    const blogs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Marquees></Marquees>

            {/* Brands Collection */}
            <div className="bg-base-200">
                <div className="container mx-auto px-5 py-28">
                    <div>
                        <div className="mb-10 lg:w-2/3">
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
                </div>
            </div>

            {/* Blogs */}
            <div className="bg-base-100">
                <div className="container mx-auto px-5 py-28">
                    <div>
                        <div className="mb-10 lg:w-2/3">
                            <div className="flex gap-3">
                                <div className="flex">
                                    <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                </div>
                                <p className="mb-4 text-xl ">Fashion Showcase</p>
                            </div>
                            <h2 className="text-4xl font-bold text-[#FD0054]">Latest Trends and Must-Have Styles</h2>
                            <p className="mt-5 mb-20">Welcome to our Fashion Showcase, where style meets substance! Explore the hottest fashion trends and essential wardrobe pieces for men and women. Our carefully curated selection features a variety of clothing and accessories to keep you ahead of the fashion game.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.slice(0, 3).map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                        }
                    </div>



                    <div className="mt-10 flex justify-center">
                        <Link to='/blogs'>
                            <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white absolute rounded-l-none">Show All</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Deals and discount */}
            <div className="bg-base-200">
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


            <div className="bg-base-100">
                <div className="container mx-auto px-5 py-28">
                    <div className=" relative">
                        <img className="w-full" src={image5} alt="" />
                        <div className="absolute bottom-8 md:bottom-36 md:left-20 left-2 lg:bottom-64 lg:left-36">
                            <h2 className="lg:text-4xl font-bold text-[#FD0054] mb-2 lg:mb-8">Subscribe our Newsletter</h2>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-32 lg:w-full rounded-r-none bg-transparent" />
                                <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white  absolute rounded-l-none">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;



/* 
<div className='border-4 rounded-full h-72 bg-white'>
            <div className='flex justify-center mt-14'>
                <img className='w-40 h-32 mb-4' src={image} alt="" />
            </div>
            <div className='flex justify-center'>
                <h2 className='text-3xl font-bold text-[#FD0054]'>{name}</h2>
            </div>
        </div>

*/