import { useEffect, useState } from "react";
import AllToyContent from "./AllToyContent";

const AllToy = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllData(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center my-12 font-bold text-4xl">All Toys</h2>
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Body */}
              {allData.map((data) => (
                <AllToyContent data={data} key={data._id}></AllToyContent>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
