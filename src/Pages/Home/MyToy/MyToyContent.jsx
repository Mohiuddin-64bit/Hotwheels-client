
import UpdateModal from "../Update/UpdateModal";

const MyToyContent = ({ myToy, handleToyUpdate, handleDelete }) => {
  return (
    <>
      <tr>
        <th>{myToy.toyName}</th>
        <td>{myToy.quantity}</td>
        <td>{myToy.price}</td>

        <th className="flex justify-center">
          
          <button onClick={() => handleDelete(myToy._id)} className="btn bg-custom-gradient mr-3">Delete</button>

          <label htmlFor="updateModal" className="btn bg-custom-gradient">
            Update
          </label>
        </th>
      </tr>
      <UpdateModal handleToyUpdate={handleToyUpdate} myToy={myToy}></UpdateModal>
    </>
  );
};

export default MyToyContent;
