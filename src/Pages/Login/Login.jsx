import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const { signIn, googleSign } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  console.log(from)

  const handleForm = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    setError("");
    if (password.length < 6) {
      return setError("Password should be more then 6 digits");
    }
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        // navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  const signInWithGoogle = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card w-[400px] h-[700px] shadow-2xl bg-base-100">
            <div className="text-center lg:text">
              <h1 className="text-5xl font-bold py-5 ">Login</h1>
            </div>
            <form onSubmit={handleForm} className="card-body">
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
                  onClick={signInWithGoogle}
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
                
              </div>
                <p className="mt-5">Create an Account? <Link className="text-blue-500 font-bold" to='../registration'>Click Here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
