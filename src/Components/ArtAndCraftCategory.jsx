import ArtAndCraftCategoryCard from "./ArtAndCraftCategoryCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PulseLoader } from "react-spinners";


const ArtAndCraftCategory = () => {
  const {isLoading,data:subCategory}= useQuery({
    queryKey: 'subcategory',
    queryFn: async () => {
      const response = await axios.get('https://painting-and-drawing-server-xi.vercel.app/subcategory');
      const data = response.data;
      return data
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
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#FF9178] font-playfair">Art And Craft Category</h1>
        <p className="text-gray-400">Painting and drawing are fundamental forms of visual art that involve creating images, compositions, and representations using various mediums, techniques, and styles. Both painting and drawing offer artists a means of expression, communication, and exploration of ideas, emotions, and aesthetics.</p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {subCategory?.map((singleSub,idx)=><ArtAndCraftCategoryCard singleSub={singleSub} key={idx} ></ArtAndCraftCategoryCard>)}
        
      </div>
    </div>
  );
};

export default ArtAndCraftCategory;