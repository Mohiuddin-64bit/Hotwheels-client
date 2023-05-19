import { useForm } from "react-hook-form";

const AddToy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Send the form data to the backend (e.g., via API or AJAX request)
    console.log(data);
    fetch('http://localhost:5000/addToy', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },  
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-[500px] h-[800px] shadow-2xl bg-base-100 mx-auto ">
          <h2 className="text-center font-bold text-3xl pt-14 ">Add a Toy</h2>
          <form className="card" onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className=" form-control">
                <label htmlFor="picture" className="block mb-1 label">
                  Picture
                </label>
                <input
                  className="input input-bordered"
                  id="picture"
                  type="text"
                  {...register("picture", { required: true })}
                />
                {errors.picture && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>  

              <div className=" form-control">
                <label htmlFor="name" className="block mb-1 label">
                  Name
                </label>
                <input
                  className="input input-bordered"
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className=" form-control">
                <label htmlFor="name" className="block mb-1 label">
                  Available Quantity
                </label>
                <input
                  className="input input-bordered"
                  id="quantity"
                  type="number"
                  {...register("quantity", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className=" form-control">
                <label htmlFor="price" className="block mb-1 label">
                  Price
                </label>
                <input
                  className="input input-bordered"
                  id="price"
                  type="number"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label htmlFor="rating" className="block mb-1 label">
                  Rating
                </label>
                <input
                  className="input input-bordered"
                  id="rating"
                  type="number"
                  {...register("rating", { required: true })}
                />
                {errors.rating && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label htmlFor="category" className="block mb-1">
                  Category
                </label>
                <select
                  id="category"
                  {...register("category", { required: true })}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="">Select a category</option>
                  <option value="sports_car">Sports Car</option>
                  <option value="truck">Truck</option>
                  <option value="regular_car">Regular Car</option>
                </select>
                {errors.category && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <input
                className="bg-custom-gradient btn mt-4"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToy;
