import { useLoaderData, useParams } from "react-router-dom";
import { GiChemicalBolt } from "react-icons/gi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Product from "../../Components/Product/Product";
import image5 from '../../assets/images/5.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import swiper1 from '../../assets/images/9.webp'
import swiper2 from '../../assets/images/10.webp'


const Products = () => {

    const products = useLoaderData();
    const { name } = useParams();
    const brandProducts = products.filter(item => item.brandName.toLowerCase() == name.toLowerCase());

    return (
        <div>
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="hero " style={{ backgroundImage: `url(${swiper1})`, placeItems: 'normal' }}>
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="container mx-auto px-5 py-28 md:py-44 flex justify-center">
                                <div className="max-w-md lg:max-w-2xl">
                                    <div className="flex justify-center gap-3">
                                        <div className="flex">
                                            <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-4 text-xl text-white text-center">Fashion Fusion Hub</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-extrabold text-center text-[#FD0054]">25% off</h1>
                                    <p className="mb-5 text-white text-center">Explore the pinnacle of style as we unveil the latest from Nike, Adidas, Gucci, Zara, H&M, and Levis. Discover iconic threads that define the fashion zeitgeist.</p>
                                    <div className="flex justify-center">
                                        <button className="btn bg-[#FD0054] border-0 text-white hover:bg-white hover:text-[#FD0054] px-14">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero " style={{ backgroundImage: `url(${swiper2})`, placeItems: 'normal' }}>
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="container mx-auto px-5 py-28 md:py-44 flex justify-center">
                                <div className="max-w-md lg:max-w-2xl">
                                    <div className="flex justify-center gap-3">
                                        <div className="flex">
                                            <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-4 text-xl text-white text-center">Fashion Fusion Hub</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-extrabold text-center text-[#FD0054]">45% off</h1>
                                    <p className="mb-5 text-white text-center">Explore the pinnacle of style as we unveil the latest from Nike, Adidas, Gucci, Zara, H&M, and Levis. Discover iconic threads that define the fashion zeitgeist.</p>
                                    <div className="flex justify-center">
                                        <button className="btn bg-[#FD0054] border-0 text-white hover:bg-white hover:text-[#FD0054] px-14">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/kczJzkS/IMG-20231018-WA0011.jpg)', placeItems: 'normal' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="container mx-auto px-5 py-28 md:py-44 flex justify-center">
                                <div className="max-w-md lg:max-w-2xl">
                                    <div className="flex justify-center gap-3">
                                        <div className="flex">
                                            <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-4 text-xl text-white text-center">Fashion Fusion Hub</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-extrabold text-center text-[#FD0054]">35% off</h1>
                                    <p className="mb-5 text-white text-center">Explore the pinnacle of style as we unveil the latest from Nike, Adidas, Gucci, Zara, H&M, and Levis. Discover iconic threads that define the fashion zeitgeist.</p>
                                    <div className="flex justify-center">
                                        <button className="btn bg-[#FD0054] border-0 text-white hover:bg-white hover:text-[#FD0054] px-14">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-5">
                    {
                        brandProducts.length === 0 ? <div className="col-span-2 flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <BsFillEmojiSmileFill className="text-9xl text-yellow-300 mb-5"></BsFillEmojiSmileFill>
                                </div>
                                <h2 className="
                         text-5xl font-bold text-[#FD0054] text-center mb-4"> Sorry!!! </h2>
                                <h2 className="
                         text-4xl font-bold text-[#FD0054] text-center"> There Is no Product available right now.  </h2>
                            </div>
                        </div>
                            : brandProducts.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
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