import { GiChemicalBolt } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../../Components/BlogCard/BlogCard";
import image5 from '../../assets/images/5.webp';
import Marquees from "../../Components/Marquees/Marquees";

const Blogs = () => {

    const blogs = useLoaderData();

    return (
        <div>
            <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/Vv3Vc4M/IMG-20231018-WA0008.jpg)', placeItems: 'normal' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="container mx-auto px-5 py-28">
                    <div className="max-w-md lg:max-w-2xl">
                        <div className="flex gap-3">
                            <div className="flex">
                                <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                            </div>
                            <p className="mb-4 text-xl text-white">Our Blogs</p>
                        </div>
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Latest Trends and Styles</h1>
                        <p className="mb-5 text-white">Welcome to our Fashion Showcase, where style meets substance! Explore the hottest fashion trends and essential wardrobe pieces for men and women. Our carefully curated selection features a variety of clothing and accessories to keep you ahead of the fashion game.</p>
                    </div>
                </div>
            </div>


            <div>
                <div className="container mx-auto px-5 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                        }
                    </div>
                </div>
            </div>

            <div className="mb-10">
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

export default Blogs;