const UpdateProduct = () => {
    return (
        <div>
            <div className="container mx-auto px-5 flex justify-center">
                <form className="w-2/3 my-10 border p-10 rounded-xl">
                    <h2 className="text-3xl font-bold text-center pb-5"><span className="text-[#FD0054]">Update</span> <span className="">your Product</span></h2>
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
                                <input type="text" name="rating" placeholder="Enter Product rating" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="brandName" placeholder="Enter Product brand Name" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter product price" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Enter product image" className="input input-bordered" required />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn bg-[#FD0054] border-[#FD0054] hover:bg-white hover:text-[#FD0054] text-white font-bold w-full mt-8">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;