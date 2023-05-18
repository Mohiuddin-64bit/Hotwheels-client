import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 px-12">
        {toys.map((toy) => (
          <CategoryCard key={toy._id} toy={toy}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
