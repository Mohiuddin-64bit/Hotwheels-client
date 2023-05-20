import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

const AllToyContent = ({ data }) => {
  const {user} = useContext(AuthContext)

  const handleViewDetail = () => {
    if (!user) {
      toast.error("You have to login to see the details");
      
      return;
    }
  };
  return (
    <>
      <tr>
        <th>{data.sellerName}</th>
        <td>{data.toyName}</td>
        <td>{data.category}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <th>
        <Link to={`/carDetails/${data._id}`}>
              <button
                onClick={handleViewDetail}
                className="btn bg-custom-gradient text-white w-full"
              >
                View Details
              </button>
            </Link>
        </th>
      </tr>
    </>
  );
};

export default AllToyContent;
