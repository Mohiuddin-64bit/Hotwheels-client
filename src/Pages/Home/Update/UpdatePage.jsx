import { useForm } from "react-hook-form";


const UpdatePage = ({myToy, handleToyUpdate}) => {

  const {register,handleSubmit, formState: { errors },} = useForm();
  return (
<div>
      <input type="checkbox" id="updateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {/* form starting */}
          <div className="">
            <div className="card mx-auto ">
              <h2 className="text-center font-bold text-3xl pt-2">Update</h2>
              <form className="card" onSubmit={handleSubmit(handleToyUpdate)}>
                <div className="card-body mx-auto">
                  <div className=" ">
                    <label htmlFor="price" className="block mb-1 label">
                      Price
                    </label>
                    <input
                      defaultValue={myToy.price}
                      className="input input-bordered"
                      id="price"
                      type="number"
                      {...register("price", { required: true })}
                    />
                    {errors.price && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className=" ">
                    <label htmlFor="name" className="block mb-1 label">
                      Available Quantity
                    </label>
                    <input
                      defaultValue={myToy.quantity}
                      className="input input-bordered"
                      id="quantity"
                      type="number"
                      {...register("quantity", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className=" ">
                    <label htmlFor="name" className="block mb-1 label">
                      Description
                    </label>
                    <input
                      defaultValue={myToy.description}
                      className="input input-bordered"
                      id="description"
                      type="text"
                      {...register("description", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className=" ">
                    <label htmlFor="picture" className="hidden mb-1 label">
                      id
                    </label>
                    <input
                      defaultValue={myToy._id}
                      className="input hidden input-bordered"
                      id="id"
                      type="text"
                      {...register("id", { required: true })}
                    />
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
          <div className="modal-action">
            <label htmlFor="updateModal" className="btn bg-custom-gradient">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;