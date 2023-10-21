import Swal from "sweetalert2";
import { GiChemicalBolt } from "react-icons/gi";
import image5 from '../../assets/images/5.webp';

const AddBrands = () => {


    const handleAddBrands = event => {
        event.preventDefault();
        const form = event.target;
        const brandName = form.name.value;
        const image = form.image.value;
        const newBrand = { brandName, image };
        console.log(newBrand);


        fetch('https://fashion-fusion-hub-server.vercel.app/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Brand added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
    }



    return (
        <div className="container mx-auto px-5">
            <div className="flex justify-center">
                <form onSubmit={handleAddBrands} className="w-full lg:w-2/3 mt-20 border p-10 rounded-xl">
                    <h2 className="text-3xl font-bold text-center pb-5"><span className="text-[#FD0054]">Add</span> <span className="">your Brands</span></h2>
                    <hr className="my-5" />
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Brand name" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Enter brand image" className="input input-bordered" required />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold w-full mt-8">Add Brand</button>
                    </div>
                </form>
            </div>



            {/* subscribe */}
            <div className="pb-20 text-white mt-20">
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

export default AddBrands;