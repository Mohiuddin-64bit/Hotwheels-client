const Gallery = () => {
  return (
    <>
    <h1 className="text-center font-bold my-12 text-5xl">Gallery Section</h1>
    <div className="grid grid-cols-3 gap-8 justify-center items-center max-w-4xl mx-auto my-8">
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://i.ibb.co/K63XDW4/pexels-alexgtacar-1592384.jpg" alt="Image 1" />
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
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://i.ibb.co/K63XDW4/pexels-alexgtacar-1592384.jpg" alt="Image 1" />
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
      <div className="aspect-w-1 aspect-h-1 relative">
        <img className="object-cover rounded-lg hover:scale-105 hover:shadow-xl" src="https://i.ibb.co/K63XDW4/pexels-alexgtacar-1592384.jpg" alt="Image 1" />
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
    </>
  );
};

export default Gallery;
