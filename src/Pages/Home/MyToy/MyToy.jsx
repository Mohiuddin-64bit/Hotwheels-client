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
        console.log(data);
        
        setMyToys(data);
      });
  }, [user]);

  console.log(myToys);



  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Quantity</th>
              <th>Price Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
              {
                myToys.map(myToy => <MyToyContent myToy={myToy} key={myToy._id}></MyToyContent>)
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
