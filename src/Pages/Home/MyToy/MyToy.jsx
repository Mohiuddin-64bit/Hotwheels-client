import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyToyContent from "./MyToyContent";
import { toast } from "react-toastify";
import PageTitle from "../../PageTitle/PageTitle";
const MyToy = () => {
  const [reload, setReload] = useState(false);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`https://hotwheels-server.vercel.app/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, reload]);


  const handleToyUpdate = (data) => {
    toast.promise(
      fetch(`https://hotwheels-server.vercel.app/updateToy/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modification > 0) {
            setReload(!reload);
          }
        }),
      {
        pending: "Updating...",
        success: "Updated successfully!",
        error: "Failed to Update.",
      }
    );
  };


  const handleDelete = (id) => {
    toast.promise(
      fetch(`https://hotwheels-server.vercel.app/deleteToy/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            setReload(!reload);
          }
        }),
      {
        pending: "Deleting...",
        success: "Deleted successfully!",
        error: "Failed to delete.",
      }
    );
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
      <PageTitle title="Hotwheels | MyToy"></PageTitle>
    </div>
  );
};

export default MyToy;
