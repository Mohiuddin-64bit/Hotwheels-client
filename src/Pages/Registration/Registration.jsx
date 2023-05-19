import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, googleSign } = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userName = form.name.value;

    console.log(password, email);
    // console.log(email, password, userName);

    setError("");

    createUser(email, password, userName)
      .then((result) => {
        // result.user.updateProfile({
        //   displayName: userName,
        // });
        console.log(result.user);
        // setUser(result.user);
        setSuccess("Account Create successfully");
        // navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  const signInWithGoogle = () => {
    return googleSign()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="card w-full  lg:w-[400px] lg:h-[800px] shadow-2xl bg-base-100">
              <div className="text-center lg:text">
                <h1 className="text-2xl lg:text-5xl font-bold py-5 ">
                  Registration
                </h1>
              </div>
              <form onSubmit={handleRegistration} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                  <button className="bg-custom-gradient btn" type="submit">
                    Registration
                  </button>
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
                <div>
                  <p className="mb-0">
                    Already Have an Account?{" "}
                    <Link className="text-blue-500 font-bold" to="../login">
                      Click Here
                    </Link>
                  </p>
                  <span className="text-green-500 font-bold text-lg">
                    <small>{success}</small>
                  </span>
                  <br />
                  <span className="text-red-500 font-bold text-lg">
                    <small>{error}</small>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
