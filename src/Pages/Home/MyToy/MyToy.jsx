import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyToyContent from "./MyToyContent";
const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
    }, [user]);

  const handleToyUpdate = (data) => {
    fetch(`http://localhost:5000/updateToy/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      console.log(data.id)
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteToy/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      console.log(id)
  };

  return (
    <div>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full mx-auto text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>

          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToyContent
                handleDelete={handleDelete}
                handleToyUpdate={handleToyUpdate}
                myToy={myToy}
                key={myToy._id}
              ></MyToyContent>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
