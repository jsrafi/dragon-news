import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import PropTypes from 'prop-types';

const SingleCategory = ({ news }) => {
  const { 
    title, 
    author, 
    rating, 
    total_view, 
    image_url, 
    details, 

  } = news;


  
  

  return (
    
    <div className="bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden  p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="text-sm font-semibold">{author.name}</h4>
            <p className="text-xs text-gray-500">{new Date(author.published_date).toDateString()}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* News Title */}
      <h2 className="text-lg font-bold">{title}</h2>

      {/* Thumbnail Image */}
      <img src={image_url} alt={title} className="w-full h-72 object-cover rounded-md my-3" />

      {/* News Details */}
      <p className="text-sm text-gray-600">{details.slice(0, 150)}...</p>
      <p className="text-red-500 text-sm font-semibold cursor-pointer mt-2">Read More</p>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: Math.round(rating.number) }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 text-sm ml-1">{rating.number}</span>
        </div>

        {/* Total Views */}
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaRegEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>

      
    </div>
  );
};

SingleCategory.propTypes = 
{
    news: PropTypes.object
}


export default SingleCategory;