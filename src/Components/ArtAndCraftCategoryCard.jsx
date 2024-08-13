
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ArtAndCraftCategoryCard = ({ singleSub }) => {
    const { subcategory, description, image, _id } = singleSub;
    return (

        <Link to="/" className="p-4 hover:bg-neutral-100 text-base-content font-bold py-2 px-4 border border-opacity-30 hover:shadow-md   hover:border-[#FF9178] rounded join-item ">
            <div className="text-7xl bg-black bg-opacity-45 rounded-xl flex justify-center">
                <img className='w-36 h-36 object-cover' src={image} />
            </div>
            <div>
                <h1 className="text-xl font-bold">{subcategory}</h1>
                <p className="font-light">{description}</p>
            </div>
            <div ><Link to={`/SubCategoryDetails/${subcategory}`} className=' btn btn-block btn-outline bg-[#ff8e74] hover:bg-[#fd8064] text-white'>View</Link></div>
        </Link>

    );
};
ArtAndCraftCategoryCard.propTypes={
    singleSub:PropTypes.object
}

export default ArtAndCraftCategoryCard;
