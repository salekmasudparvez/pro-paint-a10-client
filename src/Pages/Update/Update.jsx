import { FaRegEdit } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdAddPhotoAlternate, MdCategory, MdEventAvailable, MdOutlineSubtitles, MdStarRate } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const loadedData = useLoaderData();
    const { image, _id, item_name, subcategory_Name, short_description, Price, rating, customization, processing_time, stockStatus} = loadedData;

    const handleUpdate = (e) => {
        e.preventDefault()
        const photo = e.target.photo.value;
        const nameOfDrawing = e.target.nameOfDrawing.value;
        const subcategoryName = e.target.subcategoryName.value;
        const shortDescription = e.target.shortDescription.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processingTime = e.target.processingTime.value;
        const stockStatus = e.target.stockStatus.value;
        const updateCard = {
            image: photo,
            item_name: nameOfDrawing,
            subcategory_Name: subcategoryName,
            short_description: shortDescription,
            Price: price,
            rating: rating,
            customization: customization,
            processing_time: processingTime,
            stockStatus: stockStatus,
        }

        console.log(updateCard);
        fetch(`https://painting-and-drawing-server-xi.vercel.app/painting/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCard)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Update successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }

    return (
        <div className="py-10">
            <form onSubmit={handleUpdate} className=" max-w-3xl mx-auto bg-gray-500 bg-opacity-60 space-y-3 border rounded-lg p-8">
                <div><h1 className="text-xl font-bold text-center text-white">Update now</h1></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <p>ImageURL</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <MdAddPhotoAlternate />
                            <input type="text" className="grow" name="photo" placeholder="ImageURL" defaultValue={image} />
                        </label>
                    </div>
                    <div>
                        <p>Name of Drawing or Painting</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <MdOutlineSubtitles />
                            <input type="text" className="grow" name="nameOfDrawing" placeholder="Name of Drawing or Painting" defaultValue={item_name} />
                        </label>
                    </div>
                    <div>
                        <p>Subcategory Name</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <MdCategory />
                            <input type="text" className="grow" name="subcategoryName" placeholder="Subcategory Name" defaultValue={subcategory_Name} />
                        </label>
                    </div>
                    <div>
                        <p>Price</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <IoPricetagsSharp />
                            <input type="text" className="grow" name="price" placeholder="Price" defaultValue={Price} />
                        </label>
                    </div>
                    <div>
                        <p>Rating</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <MdStarRate />
                            <input type="text" className="grow" name="rating" placeholder="Rating" defaultValue={rating} />
                        </label>
                    </div>
                    <div>
                        <p>Customization(yes/no)</p>
                        <label className="input input-bordered flex items-center gap-2 ">
                            <FaRegEdit />
                            <input type="text" className="grow" name="customization" placeholder="Customization(yes/no)" defaultValue={customization} />
                        </label>
                    </div>

                    <div>
                        <p>Processing Time</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <IoMdTime />
                            <input type="text" className="grow" name="processingTime" placeholder="Processing Time" defaultValue={processing_time} />
                        </label>
                    </div>
                    <div>
                        <p>Stock Status( In stock/ Made to Order)</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <MdEventAvailable />
                            <input type="text" className="grow" name="stockStatus" placeholder="Stock Status( In stock/ Made to Order)" defaultValue={stockStatus} />
                        </label>
                    </div>

                    <div className="lg:col-span-2">
                        <p>Short Description</p>
                        <label className=" flex items-center ">
                            <textarea className="textarea grow textarea-bordered" name="shortDescription" placeholder="Short Description" defaultValue={short_description}></textarea>
                        </label>

                    </div>

                </div>
                <div><button type="submit" className="btn btn-block  text-white bg-[#F2613F] hover:bg-[#f2603f9d]">Update</button></div>
            </form>
        </div>
    );
};

export default Update;