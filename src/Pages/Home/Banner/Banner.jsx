const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/K63XDW4/pexels-alexgtacar-1592384.jpg"
            className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">Hotwheels <br /> Toy Car Paradise</h1>
            <p className="py-6">
              Discover a World of Thrilling Toy Cars! <br />
              Explore a vast collection of toy cars at Hotwheels. From sleek
              sports cars to rugged trucks, stylish regular cars to adorable
              mini fire trucks and mini police cars, we have it all. Immerse
              yourself in the joy of collecting and playing with our
              high-quality toy cars. Fuel your imagination and embark on
              countless adventures with Hotwheels, your ultimate destination for
              the finest toy cars. Start your engines and let the fun begin!
            </p>
            <button className="btn bg-custom-gradient">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
