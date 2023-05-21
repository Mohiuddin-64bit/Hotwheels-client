import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const CarDetails = () => {
  const carDetails = useLoaderData();

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex ">
    <img src={carDetails?.picture} className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-7">{carDetails?.toyName}</h1>
      <p className="text-lg ">Seller Name: {carDetails?.sellerName}</p>
      <p className="text-lg ">Seller Email: {carDetails?.email}</p>
      
      <p className="text-lg "> Product Quantity: {carDetails?.quantity}</p>
      <p className=" text-gray-600 my-7"><span className="font-bold text-black">Product Description:</span> {carDetails?.description}</p>
      <Rating
            initialRating={carDetails.rating}
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
    </div>
  </div>
</div>
    </div>
  );
};

export default CarDetails;
