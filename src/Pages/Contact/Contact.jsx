import { GiChemicalBolt } from "react-icons/gi";
import image5 from '../../assets/images/5.webp';


const Contact = () => {
    return (
        <div>
            <div className="container mx-auto px-5 py-10">
                <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.05970633717!2d91.86103560000002!3d24.899986149999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1697648860464!5m2!1sen!2sbd"></iframe>
            </div>

            <div className="container mx-auto px-5 pt-5 pb-20">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <div>
                            <div className="flex gap-3">
                                <div className="flex">
                                    <GiChemicalBolt className="text-2xl text-[#FD0054]"></GiChemicalBolt>
                                </div>
                                <p className="mb-4 text-xl">Contact WIth Us</p>
                            </div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Get in Touch</h1>
                            <p className="mb-5">Top rated construction packages we pleasure rationally encounter
                                consequences interesting who loves or pursue or desires.</p>
                        </div>

                        <div>
                            <div className=" gap-8 mb-6">
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                            </div>
                            <div className="gap-8 mb-6">
                                <input type="text" placeholder="Your Email" className="input input-bordered w-full" />
                            </div>
                            <div className=" mb-6">
                                <textarea className="textarea textarea-bordered  textarea-lg w-full max-w-2xl" placeholder="Bio"></textarea>
                            </div>
                            <button className="btn bg-[#FD0054] border-0 text-white hover:bg-white hover:text-[#FD0054] px-10">Send Message</button>
                        </div>
                    </div>

                    <div className="border rounded-xl p-14 flex-1">
                        <div>
                            <h2 className="text-3xl font-bold">Office Address</h2>
                            <hr className="my-3 w-1/3" />
                            <p className="text-lg">Sylhet Sadar, Sylhet Bangladesh</p>
                        </div>

                        <div className="my-8">
                            <h2 className="text-3xl font-bold">Phone Number</h2>
                            <hr className="my-3 w-1/3" />
                            <p className="text-lg">+880XXXXXXXXXX</p>
                            <p className="text-lg">+880XXXXXXXXXX</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">Web Address</h2>
                            <hr className="my-3 w-1/3" />
                            <p className="text-lg">info@example.com</p>
                            <p className="text-lg">www.example.com</p>
                        </div>
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
        </div >
    );
};

export default Contact;