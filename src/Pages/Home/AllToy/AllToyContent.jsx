import { Link } from "react-router-dom";

const AllToyContent = ({ data }) => {
  return (
    <>
      <tr>
        <th>{data.name}</th>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.price}</td>
        <td>{data.quantity}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default AllToyContent;
