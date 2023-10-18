import { GiChemicalBolt } from 'react-icons/gi';


const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/JRm6brG/IMG-20231018-WA0013.jpg)' }}>
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className="hero-content text-start text-neutral-content py-28 md:py-44">
                                <div className="max-w-md lg:max-w-2xl">
                                    <div className="flex gap-3">
                                        <div className="flex">
                                            <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-4 text-xl text-white">Fashion Fusion Hub</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Iconic Threads Unveiled</h1>
                                    <p className="mb-5 text-white">Explore the pinnacle of style as we unveil the latest from Nike, Adidas, Gucci, Zara, H&M, and Levis. Discover iconic threads that define the fashion zeitgeist.</p>
                                    <button className="btn bg-amber-600 border-0 text-white hover:bg-white hover:text-amber-600 px-14">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/yVDkMZ6/IMG-20231018-WA0012.jpg)' }}>
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className="hero-content text-start text-neutral-content py-28 md:py-44">
                                <div className="max-w-md lg:max-w-2xl">
                                    <div className="flex gap-3">
                                        <div className="flex">
                                            <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-4 text-xl text-white">Fashion Fusion Hub</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Trendsetters Junction</h1>
                                    <p className="mb-5 text-white">Dive into the world of fashion trendsetters - Nike, Adidas, Gucci, Zara, H&M, and Levis. Experience a fusion of innovation and design, shaping the fashion landscape.</p>
                                    <button className="btn bg-amber-600 border-0 text-white hover:bg-white hover:text-amber-600 px-14">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/kczJzkS/IMG-20231018-WA0011.jpg)' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-start text-neutral-content py-28 md:py-44">
                                <div className="max-w-md lg:max-w-2xl">
                                    <div className="flex gap-3">
                                        <div className="flex">
                                            <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-4 text-xl text-white">Fashion Fusion Hub</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white"> Express Your Style</h1>
                                    <p className="mb-5 text-white">Discover brand harmony at Fashion Fusion Hub with Nike, Adidas, Gucci, Zara, H&M, and Levis. Express your unique style through a symphony of fashion influences.</p>
                                    <button className="btn bg-amber-600 border-0 text-white hover:bg-white hover:text-amber-600 px-14">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;