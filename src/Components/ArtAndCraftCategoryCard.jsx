
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ArtAndCraftCategoryCard = ({ singleSub }) => {
    const { subcategory, description, image } = singleSub;
    return (

        <Link to="/" className="p-4  bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-xl join-item ">
            <div className="text-7xl bg-black bg-opacity-45 rounded-xl flex justify-center">
                <img className='w-36 h-36 object-cover' src={image} />
            </div>
            <div>
                <h1 className="text-xl font-bold">{subcategory}</h1>
                <p className="font-light">{description}</p>
            </div>
            <div ><Link className=' btn btn-block btn-outline bg-yellow-700 text-white'>View</Link></div>
        </Link>

    );
};
ArtAndCraftCategoryCard.propTypes={
    singleSub:PropTypes.object
}

export default ArtAndCraftCategoryCard;
