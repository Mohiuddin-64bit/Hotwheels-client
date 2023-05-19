import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const carDetails = useLoaderData();

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <img src={carDetails?.picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{carDetails?.name}</h1>
    </div>
  </div>
</div>
    </div>
  );
};

export default CarDetails;
