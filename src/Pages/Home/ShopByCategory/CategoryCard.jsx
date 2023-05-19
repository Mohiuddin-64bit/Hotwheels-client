
const CategoryCard = ({toy}) => {
  const {_id, picture, name, price, rating, category} = toy || {};
  return (
    <div className="mx-auto">
      <div className="card max-w-[300px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn bg-custom-gradient">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
