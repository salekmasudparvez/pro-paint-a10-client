import { Link, useLoaderData } from "react-router-dom";


const ViewDetailsAllCraft = () => {
    const data = useLoaderData()
    const { image, item_name, subcategory_Name, short_description, Price, rating, customization, processing_time, stockStatus,  user_Name } = data;
    return (
        <div className="max-w-5xl mx-auto">

            <section >
                <div className="flex flex-col lg:flex-row px-3 gap-6 max-w-6xl mx-auto py-10">

                    <div className="lg:w-1/2"> <img src={image} className=" h-full bg-gray-500 rounded-sm" /></div>
                    <div className=" lg:w-1/2 space-y-2 lg:col-span-5">
                        <h3 className="playfair-display font-semibold lg:text-4xl text-2xl ">{item_name}</h3>
                        <p className="lg:text-xl text-base text-[#0000008a]">Draw By :{user_Name}</p>
                        <p className="lg:text-xl text-base text-[#0000008a]">Subcategory Name{subcategory_Name}</p>
                        <p className="">Description:{short_description}</p>
                        <div>
                            <p className="lg:text-base text-xs">
                                <span className="font-semibold">customization :</span>{customization}
                            </p>
                            
                        </div>
                        <div>
                            {/* table start */}
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className="lg:text-base text-sm ">
                                        <tr>

                                            <th className="font-normal">Price:</th>
                                            <th className="font-medium">{Price}</th>

                                        </tr>
                                    </thead>
                                    <tbody className="lg:text-base text-sm font-normal">

                                        <tr>
                                            <td className="font-normal">StockStatus:</td>
                                            <td className="font-medium">{stockStatus}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>

                                            <td className="font-normal">Processing Time:</td>
                                            <td className="font-medium">{processing_time}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>

                                            <td className="font-normal">Rating:</td>
                                            <td className="font-medium">{rating}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* table end */}
                        </div>
                        <div>
                            <Link to="/"  className="btn btn-outline">Go Back to Home</Link>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default ViewDetailsAllCraft;