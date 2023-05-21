import Subscription from "../Subscription/Subscription";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
    <h1 className="text-center font-bold my-12 text-5xl">Gallery Section</h1>
    <div data-aos="fade-button" className=" grid px-12 lg:grid-cols-3 gap-8 justify-center items-center max-w-4xl mx-auto my-12">
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://i.ibb.co/K63XDW4/pexels-alexgtacar-1592384.jpg" alt="Image 1" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <p className="text-white font-semibold text-lg">Some Text</p>
        </div>
      </div>
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <p className="text-white font-semibold text-lg">Some Text</p>
        </div>
      </div>
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://images.pexels.com/photos/1522185/pexels-photo-1522185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <p className="text-white font-semibold text-lg">Some Text</p>
        </div>
      </div>
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Image 1" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <p className="text-white font-semibold text-lg">Some Text</p>
        </div>
      </div>
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://images.pexels.com/photos/3801089/pexels-photo-3801089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <p className="text-white font-semibold text-lg">Some Text</p>
        </div>
      </div>
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://i.ibb.co/K63XDW4/pexels-alexgtacar-1592384.jpg" alt="Image 1" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
          <p className="text-white font-semibold text-lg">Some Text</p>
        </div>
      </div>
      {/* Add other image elements here */}


    </div>
    <div className="my-12">

      <Subscription></Subscription>
    </div>
    </>
  );
};

export default Gallery;
