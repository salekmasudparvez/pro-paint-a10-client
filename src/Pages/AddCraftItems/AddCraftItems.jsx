import { FaRegEdit, FaUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdAddPhotoAlternate, MdCategory, MdEmail, MdEventAvailable, MdOutlineSubtitles, MdStarRate } from "react-icons/md";


const AddCraftItems = () => {
    const handleAdd = (e) => {
        e.preventDefault();
        const photo = e.target.photo.value;
        const nameOfDrawing = e.target.nameOfDrawing.value;
        const subcategoryName = e.target.subcategoryName.value;
        const shortDescription = e.target.shortDescription.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processingTime = e.target.processingTime.value;
        const stockStatus = e.target.stockStatus.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newCard={ 
            image:photo,
            item_name:nameOfDrawing,
            subcategory_Name:subcategoryName,
            short_description:shortDescription,
            Price:price,
            rating:rating,
            customization:customization,
            processing_time:processingTime,
            stockStatus:stockStatus,
            email:email,
            user_Name:name}
        console.log(newCard);
    }
    return (
        <div className="w-full py-10">
            <form onSubmit={handleAdd} className=" max-w-3xl mx-auto bg-gray-500 bg-opacity-60 space-y-3 border rounded-lg p-8">
                <div><h1 className="text-xl font-medium text-center text-orange-800">Add your drawing or painting</h1></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <label className="input input-bordered flex items-center gap-2">
                        <MdAddPhotoAlternate />
                        <input type="text" className="grow" name="photo" placeholder="ImageURL" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdOutlineSubtitles />
                        <input type="text" className="grow" name="nameOfDrawing" placeholder="Name of Drawing or Painting" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdCategory />
                        <input type="text" className="grow" name="subcategoryName" placeholder="Subcategory Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <IoPricetagsSharp />
                        <input type="text" className="grow" name="price" placeholder="Price" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdStarRate />
                        <input type="text" className="grow" name="rating" placeholder="Rating" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 ">
                        <FaRegEdit />
                        <input type="text" className="grow" name="customization" placeholder="Customization(yes/no)" />
                    </label>


                    <label className="input input-bordered flex items-center gap-2">
                        <IoMdTime />
                        <input type="text" className="grow" name="processingTime" placeholder="Processing Time" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdEventAvailable />
                        <input type="text" className="grow" name="stockStatus" placeholder="Stock Status( In stock/ Made to Order)" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <FaUser />
                        <input type="text" className="grow" name="name" placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                        <input type="text" className="grow" name="email" placeholder="Email" />
                    </label>
                    <label className=" flex items-center col-span-2">
                        <textarea className="textarea grow textarea-bordered" name="shortDescription" placeholder="Short Description"></textarea>
                    </label>


                </div>
                <div><button type="submit" className="btn btn-block  text-white bg-[#F2613F] hover:bg-[#f2603f9d]">Add</button></div>
            </form>
        </div>
    );
};

export default AddCraftItems;