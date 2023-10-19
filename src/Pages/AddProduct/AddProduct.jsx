import { GiChemicalBolt } from "react-icons/gi";
import Marquees from "../../Components/Marquees/Marquees";
import image5 from '../../assets/images/5.webp';
import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProducts = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;

        const newProduct = { name, brandName, type, rating, price, description, image };
        console.log(newProduct);


        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
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
                <form onSubmit={handleAddProducts} className="w-full lg:w-2/3 mt-20 border p-10 rounded-xl">
                    <h2 className="text-3xl font-bold text-center pb-5"><span className="text-[#FD0054]">Add</span> <span className="">your Product</span></h2>
                    <hr className="my-5" />
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Product name" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="text" name="type" placeholder="Enter Product type" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name="rating" placeholder="Enter Product rating" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <select className="select select-bordered w-full text-gray-400" required name="brandName" type="text">
                                    <option disabled selected>Select Brand Name</option>
                                    <option>Nike</option>
                                    <option>Adidas</option>
                                    <option>Gucci</option>
                                    <option>Zara</option>
                                    <option>H&M</option>
                                    <option>Levis</option>
                                </select>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter product price" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Enter Product description" className="input input-bordered" required />
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Enter product image" className="input input-bordered" required />
                        </div>
                    </div>

                    <div>
                        <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold w-full mt-8">Add Product</button>
                    </div>
                </form>
            </div>

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
    );
};

export default AddProduct;