import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArtAndCrafCard = ({ privateData,setMyData,MyData }) => {
    const { image, _id, item_name, subcategory_Name, short_description, Price, rating, customization, processing_time, stockStatus, email, user_Name } = privateData;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/painting/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = MyData.filter(SingleData => SingleData._id !== _id);
                            setMyData(remaining)
                        }
                    })
            }
        });

    }

    return (
        <>
            <div className="flex flex-col justify-center duration-1000 items-center border p-2 rounded-xl shadow-xl hover:shadow-2xl">
                <div><img className="rounded-xl" src={image} /></div>
                <div className="text-center space-y-3  text-[#f9f9f9] font-playfair font-semibold text-xl">
                    <h1 className="text-orange-500">{item_name}</h1>
                    <div className="flex justify-between"><span className="text-base text-gray-500 text-left">Added By {user_Name}</span> <span className="text-right text-base text-gray-500">Subcategory Name: {subcategory_Name}</span></div>
                    <div className="text-sm text-gray-400 text-left">{short_description}</div>
                    <div className="flex justify-between text-sm text-left"><p>Subcategory Name:{subcategory_Name}</p>Stock-Status:{stockStatus} </div>
                    <div className="flex justify-between  text-sm"><p className="text-red-500">Price:{Price}</p>Rating:{rating}  </div>

                    <div className="join join-horizontal gap-2 ">
                        <Link to={`/details/${_id}`} className="btn bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded join-item">View</Link>
                        <Link to={`/update/${_id}`} className="btn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded join-item" >Edit</Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded join-item">X</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyArtAndCrafCard;