import PageTitle from "../PageTitle/PageTitle";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";


const Home = () => {
  return (

    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <PageTitle title="Hotwheels | Home"></PageTitle>
    </div>
  );
};

export default Home;