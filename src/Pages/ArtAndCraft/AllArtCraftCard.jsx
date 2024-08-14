
import { PropTypes } from 'prop-types';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { useState } from 'react';
import { LuClipboard } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";
import toast from 'react-hot-toast';
import { FaBookmark } from "react-icons/fa6";






const AllArtCraftCard = ({ singlePaintData }) => {
    const { image, _id, item_name, subcategory_Name, user_Name, Price, rating, short_description } = singlePaintData;
    const [isCommentOpen, setisCommentOpen] = useState(false);
    const [isCopy, setisCopy] = useState(false);
    const [isBookmark, setisBookmark] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(`https://pro-painting.netlify.app/details/${_id}`);
        setisCopy(true);
        toast('Copied successfully!', {
            icon: '📋',
        });
        setTimeout(() => {
            setisCopy(false);
        }, 2000);
    }

    const handleBookMark = () => {
        setisBookmark(!isBookmark)
        toast(`${!isBookmark ? 'Bookmarked successfully!' : 'Bookmarked removed!'}`, {
            icon: <FaBookmark />,
        });
        
    }
    return (
        <div className="rounded-md shadow-md sm:w-96 shadow-gray-200 bg-white  text-gray-900">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-6 h-6 rounded-full shadow-sm bg-gray-500 border-gray-700" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{user_Name}</h2>
                        <span className="inline-block text-xs leading-none text-gray-400">{subcategory_Name}</span>
                    </div>
                </div>
                <button title="Open options" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                        <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                        <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                    </svg>
                </button>
            </div>
            <img src={image} alt="" className="object-cover object-center w-full h-56 bg-gray-500" />
            <div className="p-3 space-y-1">
                <div className="flex items-center justify-between space-x-1">
                    <div className="flex items-center space-x-1">
                        <button type="button" title="Like post" className="flex btn btn-xs btn-circle hover:bg-white text-2xl items-center justify-center">

                            {/* <CiHeart /> */}

                            <span className='text-red-500'><FaHeart /></span>
                        </button>
                        <button onClick={() => setisCommentOpen(!isCommentOpen)} type="button" title="Add a comment" className="flex text-xl btn btn-xs btn-circle hover:bg-white items-center justify-center">
                            <FaRegComment />
                        </button>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} type="button" title="Share post" className="flex text-xl btn btn-xs btn-circle hover:bg-white items-center justify-center">
                            <IoShareSocialOutline />
                        </button>
                    </div>

                    <button onClick={handleBookMark} type="button" title="Bookmark post" className="flex btn btn-xs btn-circle hover:bg-white text-2xl items-center justify-center">

                        {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                </div>
                {isCommentOpen && (
                    <div className="flex-grow flex border rounded-full transform transition-transform duration-1000 ease-in-out border-[#FF9178] py-0.5 pl-2 focus:outline focus:outline-[#ff7d60]">
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            className="w-full border-none py-0.5 focus:outline-none rounded text-sm pl-0 text-gray-500"
                        />
                        <button className='btn text-2xl btn-xs rounded-e-full'>
                            <IoSend />
                        </button>
                    </div>
                )}
                <div className="flex flex-wrap items-center pt-3 pb-1">
                    <div className="flex items-center space-x-2">
                        <div className="flex -space-x-1">
                            <img alt="" className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                            <img alt="" className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                            <img alt="" className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
                        </div>
                        <span className="text-sm">Liked by
                            <span className="font-semibold">Mamba UI</span>and
                            <span className="font-semibold">86 others</span>
                        </span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className="text-sm">
                        <span className="text-base font-semibold text-red-500">Price:</span>{Price}
                    </p>
                    <p className="text-sm">
                        <span className="text-base font-semibold text-yellow-500">Rating:</span>{rating}
                    </p>
                </div>
                <div>
                    <p className="text-sm">
                        {short_description}
                    </p>
                </div>

                <div className='flex justify-between items-center'>
                    <button className="btn rounded btn-sm">Add to cart</button>
                    <button className="btn rounded btn-sm">Buy now</button>
                </div>
            </div>
            {/* Share modal */}
            <dialog id="my_modal_3" className="modal bg-white bg-opacity-0">
                <div className="modal-box backdrop-blur-md rounded">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle hover:bg-white bg-white absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Share the link</h3>
                    <div className=" rounded  bg-gray-200 px-3  select-all flex justify-center">
                        <p className=' text-wrap  overflow-x-auto flex-grow'>https://pro-painting.netlify.app/details/{_id}</p>
                        <div className='flex justify-center items-center'>
                            <button onClick={handleCopy} className='btn  btn-xs btn-circle p-0 text-2xl hover:bg-white'>
                                {isCopy ? <span className='text-green-500'><LuClipboardCheck /></span> : <span className='text-gray-500'><LuClipboard /></span>}
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
AllArtCraftCard.propTypes = {
    singlePaintData: PropTypes.object
}
export default AllArtCraftCard;