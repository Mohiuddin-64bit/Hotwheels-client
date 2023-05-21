import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useState } from "react";

const Navbar = () => {
  const [showName, setShowName] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  const toggleNameVisibility = () => {
    setShowName(!showName);
  };

  return (
    <div>
      <div className="navbar bg-base-100 px-12 mt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link to="allToy">All Toys</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              {user ? (
                <>
                  {" "}
                  <li>
                    <Link to="myToy">My Toys</Link>
                  </li>
                  <li>
                    <Link to="addToy">Add a Toys</Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <img className="w-24" src="logo/logo1.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  text-xl px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="allToy">All Toys</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            {user ? (
              <>
                {" "}
                <li>
                  <Link to="myToy">My Toys</Link>
                </li>
                <li>
                  <Link to="addToy">Add a Toys</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {/* User profile */}
              <div
                className="flex items-center gap-5"
                onMouseEnter={toggleNameVisibility}
                onMouseLeave={toggleNameVisibility}
              >
                <div className="flex items-center">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} alt="Profile Picture" />
                    </div>
                  </div>
                  {showName && (
                    <p className="font-bold lg:block hidden ml-4">
                      {user.displayName || user.email}
                    </p>
                  )}
                </div>
                {/* Log Out button */}
                <button
                  className="btn bg-custom-gradient"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Login and Registration buttons */}
              <button className="lg:btn p-2 rounded text-white text-sm bg-custom-gradient mr-2">
                <Link to="/login">Login</Link>
              </button>
              <button className="lg:btn p-2 rounded text-white text-sm bg-custom-gradient">
                <Link to="/registration">Registration</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
