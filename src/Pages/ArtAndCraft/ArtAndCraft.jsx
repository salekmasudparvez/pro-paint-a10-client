import SingleArtCard from "./SingleArtCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PulseLoader } from "react-spinners";


const ArtAndCraft = () => {
    const {isLoading,data:allPaintingData}=useQuery({
        queryKey: ['allPaintingData'],
        queryFn: async () => {
            // fetch data from an API
            const response = await axios.get('https://painting-and-drawing-server-xi.vercel.app/painting');
            const data = response.data
            return data;
        }, 
    })
    if(isLoading){
        return (
            <div className="flex justify-center items-center w-full h-full">
              <PulseLoader
            color="#FF9178"
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
            </div>
        )
      }
    return (
      
        <div className="overflow-x-auto max-w-5xl py-5 rounded-sm my-5 bg-base-300 mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-[#FF9178] text-white">
                        <th>Drawing image</th>
                        <th>Name</th>
                        <th>Subcategory Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allPaintingData?.map((singlePaintData,idx)=><SingleArtCard key={idx} singlePaintData={singlePaintData}></SingleArtCard>)}
                </tbody>
            </table>
        </div>
    );
};

export default ArtAndCraft;