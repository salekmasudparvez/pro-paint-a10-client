import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const Navitem = ({name,to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? " font-semibold lg:border-b-2 border  lg:bg-gray-100 lg:border-l-0 lg:border-r-0 border-t-0  bg-gray-200 lg:w-fit p-2 w-full lg:border-b-gray-500 text-[#949494]" : isActive ? " font-semibold lg:border-b-2 border  lg:bg-gray-100 lg:border-l-0 lg:border-r-0 border-t-0  bg-gray-200 lg:w-fit p-2 w-full lg:border-b-gray-500 text-[#949494]" : "hover:text-[#4f4e4e] font-semibold lg:w-fit p-2 w-full lg:hover hover:bg-gray-200"
            }
        >
            {name}
        </NavLink>
    );
};
Navitem.propTypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}
export default Navitem;