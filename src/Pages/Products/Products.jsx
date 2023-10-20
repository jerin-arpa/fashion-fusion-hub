import { useLoaderData, useParams } from "react-router-dom";
import { GiChemicalBolt } from "react-icons/gi";
import Product from "../../Components/Product/Product";

import image5 from '../../assets/images/5.webp';
import Marquees from "../../Components/Marquees/Marquees";

const Products = () => {

    const products = useLoaderData();
    const { name } = useParams();
    const brandProducts = products.filter(item => item.brandName.toLowerCase() == name.toLowerCase());

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/g9Rd7SV/IMG-20231018-WA0005.jpg)', placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="container mx-auto px-5 py-28 md:py-44">
                            <div className="max-w-md lg:max-w-2xl">
                                <div className="flex gap-3">
                                    <div className="flex">
                                        <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-4 text-xl text-white">Fashion Fusion Hub</p>
                                </div>
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Iconic Threads Unveiled</h1>
                                <p className="mb-5 text-white">Explore the pinnacle of style as we unveil the latest from Nike, Adidas, Gucci, Zara, H&M, and Levis. Discover iconic threads that define the fashion zeitgeist.</p>
                                <button className="btn bg-[#FD0054] border-0 text-white hover:bg-white hover:text-[#FD0054] px-14">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/yVDkMZ6/IMG-20231018-WA0012.jpg)', placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="container mx-auto px-5 py-28 md:py-44">
                            <div className="max-w-md lg:max-w-2xl">
                                <div className="flex gap-3">
                                    <div className="flex">
                                        <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-4 text-xl text-white">Fashion Fusion Hub</p>
                                </div>
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Trendsetters Junction</h1>
                                <p className="mb-5 text-white">Dive into the world of fashion trendsetters - Nike, Adidas, Gucci, Zara, H&M, and Levis. Experience a fusion of innovation and design, shaping the fashion landscape.</p>
                                <button className="btn bg-[#FD0054] border-0 text-white hover:bg-white hover:text-[#FD0054] px-14">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/kczJzkS/IMG-20231018-WA0011.jpg)', placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="container mx-auto px-5 py-28 md:py-44">
                            <div className="max-w-md lg:max-w-2xl">
                                <div className="flex gap-3">
                                    <div className="flex">
                                        <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-4 text-xl text-white">Fashion Fusion Hub</p>
                                </div>
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white"> Express Your Style</h1>
                                <p className="mb-5 text-white">Discover brand harmony at Fashion Fusion Hub with Nike, Adidas, Gucci, Zara, H&M, and Levis. Express your unique style through a symphony of fashion influences.</p>
                                <button className="btn bg-[#FD0054] border-0 text-white hover:bg-white hover:text-[#FD0054] px-14">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-5">
                    {
                        brandProducts.length === 0 ? <h2 className="
                         text-5xl font-bold text-[#FD0054]">There Is no Product available right now. </h2> : brandProducts.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>



            <div className="my-5">
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
        </div>
    );
};

export default Products;