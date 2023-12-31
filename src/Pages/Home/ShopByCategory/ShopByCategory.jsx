import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import AddressSection from "../Address/Address";


const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("regular_car"); // Initially set Tab 2 as active

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  useEffect(() => {
    fetch(`https://hotwheels-server.vercel.app/allToy/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);
  return (
    <>
    <div className="bg-base-200 py-12">
      <h2 className="text-center font-bold text-5xl mb-12">Shop By Category</h2>
      <div className="tabs tabs-boxed justify-center my-8">
        <a
          className={`tab text-lg ${
            activeTab === "sports_car" ? "tab-active bg-custom-gradient" : ""
          }`}
          onClick={() => handleTabClick("sports_car")}
        >
          Sports Car
        </a>
        <a
          className={`tab text-lg ${
            activeTab === "regular_car" ? "tab-active bg-custom-gradient" : ""
          }`}
          onClick={() => handleTabClick("regular_car")}
        >
          Regular Car
        </a>
        <a
          className={`tab text-lg ${
            activeTab === "truck" ? "tab-active bg-custom-gradient" : ""
          }`}
          onClick={() => handleTabClick("truck")}
        >
          Truck 
        </a>
      </div>

      <div className="lg:flex flex-wrap  justify-center gap-12 px-12 pb-12">
        {toys.map((toy) => (
          <CategoryCard key={toy._id} toy={toy}>
          </CategoryCard>
        ))}
      </div>
    </div>
    <AddressSection></AddressSection>
    </>
  );
};

export default ShopByCategory;
