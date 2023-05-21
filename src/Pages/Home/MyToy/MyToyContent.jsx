import { Link } from "react-router-dom";
import UpdateModal from "../Update/UpdateModal";

const MyToyContent = ({ myToy, handleToyUpdate, handleDelete }) => {
  const handleId = (id) => {
    console.log(id)
  }
  return (
    <>
      <tr>
        <th>{myToy.toyName}</th>
        <td>{myToy.quantity}</td>
        <td>{myToy.price}</td>

        <th className="flex justify-center">
          <button
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this item?")
              ) {
                handleDelete(myToy._id);
              }
            }}
            className="btn bg-custom-gradient mr-3"
          >
            Delete
          </button>
          <Link className="mr-3" to={`/carDetails/${myToy._id}`}>
            <button className="btn  bg-custom-gradient text-white w-full">
              View Details
            </button>
          </Link>
          <label onClick={() => handleId(myToy._id)} htmlFor="updateModal" className="btn bg-custom-gradient">
            Update
          </label>
        </th>
      </tr>
      <UpdateModal
        handleToyUpdate={handleToyUpdate}
        myToy={myToy}
      ></UpdateModal>
    </>
  );
};

export default MyToyContent;
