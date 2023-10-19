import Swal from "sweetalert2";

const AddBrands = () => {


    const handleAddBrands = event => {
        event.preventDefault();
        const form = event.target;
        const brandName = form.name.value;
        const image = form.image.value;
        const newBrand = { brandName, image };
        console.log(newBrand);


        fetch('http://localhost:5000/brand', {
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
            <div className="flex justify-center mb-20">
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
        </div>
    );
};

export default AddBrands;