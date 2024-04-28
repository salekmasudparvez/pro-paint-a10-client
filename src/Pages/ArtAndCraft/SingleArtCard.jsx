
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const SingleArtCard = ({ data,setAllPaintingData,allPaintingData }) => {
    const { image, _id, item_name, subcategory_Name, short_description, Price, rating, customization, processing_time, stockStatus, email, user_Name } = data;
    

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
                            const remaining=allPaintingData.filter(SingleData=>SingleData._id!==_id);
                            setAllPaintingData(remaining)
                        }
                    })
            }
        });

    }
    return (
        <div>

            <div className="card bg-orange-300 shadow-xl">
                <figure><img className="rounded-3xl" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-center">
                        <div className="join join-horizontal gap-2 ">
                            <Link to={`/details/${_id}`} className="btn bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded join-item">View</Link>
                            <Link to={`/update/${_id}`} className="btn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded join-item" >Edit</Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default SingleArtCard;