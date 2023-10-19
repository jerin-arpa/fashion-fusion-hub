import { GiChemicalBolt } from "react-icons/gi";
import image5 from '../../assets/images/5.webp';

const About = () => {
    return (
        <div>
            <div className="container mx-auto px-5 pb-20 pt-10">
                <div>
                    <div className="flex justify-center gap-3">
                        <div className="flex">
                            <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                        </div>
                        <p className="mb-4 text-xl">About Us</p>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-center w-2/3">About Fashion Fusion Hub</h1>
                    </div>
                </div>

                <div className="my-5">
                    <hr />
                </div>

                <div className="flex gap-10 mt-10">

                    <div className="flex-1">
                        <img className="w-full" src="https://i.ibb.co/5TrQ4zp/IMG-20231018-WA0022.jpg" alt="" />
                    </div>

                    <div className="flex-1">
                        <h2 className="my-5 text-3xl lg:text-5xl font-bold">Fashion Fusion Hub - always try to do something
                            unique and traditional...</h2>
                        <p className="mb-5">Fashion Fusion Hub pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur pursue pleasure rationally encounter conseque nces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

                        <p>Fashion Fusion Hub pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem usint enim ad minima</p>
                    </div>
                </div>



                <div className="flex gap-10 mt-10">
                    <div className="flex-1">
                        <h2 className="my-5 text-3xl lg:text-5xl font-bold">Our Vission</h2>
                        <p className="mb-5">Fashion Fusion Hub pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>

                        <p className="mb-5">Fashion Fusion Hub pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem usint enim ad minima</p>

                        <div className="flex flex-col md:flex-row gap-14">
                            <ul className="text-2xl font-bold">
                                <li>Better Quality</li>
                                <li>Good Service</li>
                                <li>Secure Payment</li>
                                <li>Online Support</li>
                            </ul>

                            <ul className="text-2xl font-bold">
                                <li>Quality Materials</li>
                                <li>In time Delivery</li>
                                <li>Simple Retaurn</li>
                                <li>Creative Team</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1">
                        <img className="w-full" src="https://i.ibb.co/7rP5NmJ/IMG-20231018-WA0021.jpg" alt="" />
                    </div>

                </div>


                <div className="flex gap-10 mt-10">
                    <div className="flex-1">
                        <img className="w-full" src="https://i.ibb.co/7rP5NmJ/IMG-20231018-WA0021.jpg" alt="" />
                    </div>

                    <div className="flex-1">
                        <h2 className="my-5 text-3xl lg:text-5xl font-bold">Our Mission</h2>
                        <p className="mb-5">Fashion Fusion Hub pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</p>

                        <p className="mb-5">Fashion Fusion Hub pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem usint enim ad minima</p>

                        <p className="mb-5">pursue pleasure rationally encounter consequences that are extremely desires to obtain pain of itself, because it is pain circumstances</p>

                        <p className="mb-5">pursue pleasure rationally encounter consequences that are extremely desires to obtain pain of itself, because it is pain circumstances</p>
                    </div>
                </div>


                {/* subscribe */}
                <div className="pt-20 text-white">
                    <div className="container mx-auto">
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

export default About;