
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import AllArtCraftCard from "./AllArtCraftCard";


const AllArtCraft = () => {
    const { isLoading, data: allPaintingData } = useQuery({
        queryKey: ['allPaintingData'],
        queryFn: async () => {
            // fetch data from an API
            const response = await axios.get('https://painting-and-drawing-server-xi.vercel.app/painting');
            const data = response.data
            return data;
        },
    })
    if (isLoading) {
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

        <div className="w-full max-w-5xl py-5 rounded-sm my-5 place-items-center mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 md:gap-5 px-3 gap-3 bg-white">

            {allPaintingData?.map((singlePaintData, idx) => <AllArtCraftCard key={idx} singlePaintData={singlePaintData}></AllArtCraftCard>)}

        </div>
    );
};

export default AllArtCraft;