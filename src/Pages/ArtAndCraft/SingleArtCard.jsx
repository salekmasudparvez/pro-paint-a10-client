
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';



const SingleArtCard = ({ singlePaintData }) => {
    const { image, _id, item_name, subcategory_Name, short_description, user_Name } = singlePaintData;



    return (
        <tr className="hover">
            <th>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={image} />
                    </div>
                </div>
            </th>
            <td>
                <div className="flex flex-col">
                    <p>Item Name:{item_name}</p>
                    <p>Added By :{user_Name}</p>
                </div>
            </td>
            <td>{subcategory_Name}</td>
            <td>{short_description}</td>
            <td><Link to={`/details/${_id}`} className="btn btn-outline bg-yellow-700 text-white">view</Link></td>
        </tr>
    );
};
SingleArtCard.propTypes = {
    singlePaintData: PropTypes.object
}
export default SingleArtCard;