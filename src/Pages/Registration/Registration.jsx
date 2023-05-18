import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="card w-full  lg:w-[400px] lg:h-[750px] shadow-2xl bg-base-100">
              <div className="text-center lg:text">
                <h1 className="text-2xl lg:text-5xl font-bold py-5 ">
                  Registration
                </h1>
              </div>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="bg-custom-gradient btn">
                    Registration
                  </button>
                </div>
                <div className="flex justify-center my-5 gap-2">
                  <div
                    // onClick={signInWithGoogle}
                    className="flex items-center cursor-pointer bg-custom-gradient rounded-full p-3"
                  >
                    <div>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="logo/google.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    // onClick={signInWithGitHub}
                    className="flex items-center cursor-pointer bg-custom-gradient rounded-full p-3"
                  >
                    <div>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="logo/github.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <p className=" ">
                  Already Have an Account?{" "}
                  <Link className="text-blue-500 font-bold" to="../login">
                    Click Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
