import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CategoryCard = ({ toy }) => {
  const { picture, name, price, rating } = toy || {};

  return (
    <div className="mx-auto">
      <div className="max-w-[300px] max-h-[500px] bg-white shadow-xl rounded-lg overflow-hidden">
        <img src={picture} alt={name} className="h-64 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-700 mb-2">$ {price}</p>
          <Rating
              initialRating={rating}
              readonly
              emptySymbol={<FontAwesomeIcon icon={faStar} size="sm" style={{color: "#f7ba00",}} />}
              fullSymbol={<FontAwesomeIcon icon={faStar} size="sm" style={{color: "#f7ba00",}} />}
            />
          <div className="mt-4">
            <button className="btn bg-custom-gradient text-white w-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
