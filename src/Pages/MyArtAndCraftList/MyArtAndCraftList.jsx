

const MyArtAndCraftList = () => {
    
    return (
        <div className="max-w-5xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            myart CraftItems
            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img src={image} alt={itemName} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{itemName}</div>
                    <p className="text-gray-700 text-base mb-2">${price}</p>
                    <div className="flex items-center mb-2">
                        <div className="text-yellow-400">
                            {Array.from({ length: rating }, (_, i) => (
                                <svg
                                    key={i}
                                    className="h-5 w-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 1l2.6 6.3H18l-5 4.5 1.9 6L10 14.5 5.5 17l1.9-6-5-4.5h5.4L10 1z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-700 text-base mb-2">
                        Customization: {customization ? 'Yes' : 'No'}
                    </p>
                    <p className="text-gray-700 text-base mb-2">Stock Status: {stockStatus}</p>
                    <div className="flex justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MyArtAndCraftList;
// const handleDelete = _id => {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//         if (result.isConfirmed) {

//             fetch(`http://localhost:5000/painting/${_id}`, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your file has been deleted.",
//                             icon: "success"
//                         });
//                         const remaining = allPaintingData.filter(SingleData => SingleData._id !== _id);
//                         setAllPaintingData(remaining)
//                     }
//                 })
//         }
//     });

// }
{/* <div className="join join-horizontal gap-2 ">
<Link to={`/details/${_id}`} className="btn bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded join-item">View</Link>
<Link to={`/update/${_id}`} className="btn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded join-item" >Edit</Link>
<button onClick={() => handleDelete(_id)} className="btn bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded join-item">X</button>
</div> */}