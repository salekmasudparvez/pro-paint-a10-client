import { useLoaderData } from "react-router-dom";
import SingleArtCard from "./SingleArtCard";


const ArtAndCraft = () => {
    const allPaintingData = useLoaderData();

    return (
        // <div className="max-w-5xl gap-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
        //     {allPaintingData.map((data,idx)=><SingleArtCard key={idx} allPaintingData={allPaintingData} data={data}></SingleArtCard>)}
        // </div>
        <div className="overflow-x-auto max-w-5xl py-5 rounded-sm my-5 bg-base-300 mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-[#FF9178] text-black">
                        <th>Drawing image</th>
                        <th>Name</th>
                        <th>Subcategory Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allPaintingData.map((singlePaintData,idx)=><SingleArtCard key={idx} singlePaintData={singlePaintData}></SingleArtCard>)}
                </tbody>
            </table>
        </div>
    );
};

export default ArtAndCraft;