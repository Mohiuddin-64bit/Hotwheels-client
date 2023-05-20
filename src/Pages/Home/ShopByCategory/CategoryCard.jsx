import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CategoryCard = ({ toy }) => {
  const { picture, toyName, price, rating, _id } = toy || {};
  const { user } = useContext(AuthContext);
  const handleViewDetail = () => {
    if (!user) {
      return toast.error("You have to login to see the details");
    }
  };

  return (
    <div className="flex  flex-col items-center">
      <div className="w-72 h-[450px]  bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={picture} alt={name} className="h-64 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{toyName}</h2>
          <p className="text-gray-700 mb-2">$ {price}</p>
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#f7ba00" }}
              />
            }
            fullSymbol={
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#f7ba00" }}
              />
            }
          />
          <div className="mt-4">
            <Link to={`/carDetails/${_id}`}>
              <button
                onClick={handleViewDetail}
                className="btn bg-custom-gradient text-white w-full"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
