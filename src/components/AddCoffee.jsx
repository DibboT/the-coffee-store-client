

const AddCoffee = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-center mb-10 text-3xl font-bold">Add Coffee</h2>
            <form>
                {/*Form Row: Coffee Name And Quantity */}
                <div className="flex">
                    <div className="form-control md:w-1/2">
                        <label className="label text">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/*Form Row: Supplier And Taste */}
                <div className="flex">
                    <div className="form-control md:w-1/2">
                        <label className="label text">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/*Form Row: Category and Details */}
                <div className="flex">
                    <div className="form-control md:w-1/2">
                        <label className="label text">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddCoffee;