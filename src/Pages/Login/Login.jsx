import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card  w-[400px] h-[700px] shadow-2xl bg-base-100">
            <div className="text-center lg:text">
              <h1 className="text-5xl font-bold py-5 ">Login</h1>
            </div>
            <div className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-custom-gradient btn">Login</button>
              </div>
              <div className="flex justify-center mt-5 gap-2">
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
                <p className="mt-5">Create an Account? <Link className="text-blue-500 font-bold" to='../registration'>Click Here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
