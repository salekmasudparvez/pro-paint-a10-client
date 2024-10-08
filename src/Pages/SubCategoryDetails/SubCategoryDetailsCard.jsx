import { Link } from "react-router-dom";
import PropTypes  from 'prop-types';


const SubCategoryDetailsCard = ({card}) => {
    const { image, _id, item_name, subcategory_Name, short_description, processing_time, Price, rating, stockStatus, user_Name } = card;
    return (
        <div className="flex flex-col justify-center duration-1000 items-center border p-2 rounded-xl shadow-xl hover:shadow-2xl">
            <div><img className="rounded-xl h-40 " src={image} /></div>
            
            <div className="text-center space-y-3  text-[#f9f9f9] font-playfair font-semibold text-xl">
                <h1 className="text-[#FF9178]">{item_name}</h1>
                <div className="flex justify-between"><span className="text-base text-gray-500 text-left">Added By {user_Name}</span> <span className="text-right text-base text-gray-500">Subcategory Name: {subcategory_Name}</span></div>
                <div className="text-sm text-gray-400 text-left">{short_description}</div>
                <div className="flex justify-between text-sm text-left text-purple-600"><p>Processing Time:<span className="text-sm text-gray-400">{processing_time}</span></p>Stock-Status:<span className="text-gray-400">{stockStatus}</span></div>
                <div className="flex justify-between  text-sm"><p className="text-red-500">Price:{Price}$</p>Rating:{rating}  </div>

                <div >
                    <Link to={`/details/${_id}`} className="btn btn-block bg-[#FF9178] hover:bg-[#ff876c] text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded join-item">View</Link>
                    
                </div>
            </div>
        </div>
    );
};
SubCategoryDetailsCard.propTypes={
    card:PropTypes.object
}

export default SubCategoryDetailsCard;