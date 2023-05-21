import { useEffect, useState } from "react";
import AllToyContent from "./AllToyContent";

const AllToy = () => {
  const [allData, setAllData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("https://hotwheels-server.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  console.log(searchText)

  const handleSearch = () => {
    fetch(`https://hotwheels-server.vercel.app/toySearchByName/${searchText}`)
    .then(res => res.json())
    .then(data => {
      setAllData(data)
    })
  }

  return (
    <div>
      <h2 className="text-center my-12 font-bold text-4xl">All Toys</h2>
      <div className="text-center my-12">
        <input
        onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Type here"
          className=" input input-bordered input-info w-full max-w-xs"
        />
        <button onClick={handleSearch} className="bg-custom-gradient btn ml-3">Search</button>
      </div>
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
