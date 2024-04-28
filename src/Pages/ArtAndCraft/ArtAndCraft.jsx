import { useLoaderData } from "react-router-dom";
import SingleArtCard from "./SingleArtCard";


const ArtAndCraft = () => {
    const allPaintingData = useLoaderData();
    console.log(allPaintingData);
    return (
        <div className="max-w-5xl gap-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
            {allPaintingData.map((data,idx)=><SingleArtCard key={idx} data={data}></SingleArtCard>)}
        </div>
    );
};

export default ArtAndCraft;