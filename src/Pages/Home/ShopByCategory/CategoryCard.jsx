
const CategoryCard = ({toy}) => {
  const { picture, name, price, rating} = toy || {};
  console.log(rating)
  return (
    <div className="mx-auto">
      <div className="card max-w-[300px] max-h-[500px] bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={picture}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>$ {price}</p>
          <p className="font-bold">Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-custom-gradient">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
