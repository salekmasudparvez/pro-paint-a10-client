import { useQuery } from "@tanstack/react-query";
import CraftItemsCard from "./CraftItemsCard";
import { PropTypes } from 'prop-types';
import { Typewriter } from 'react-simple-typewriter'
import axios from "axios";
import { PulseLoader } from "react-spinners";


const CraftItems = () => {
  const {isLoading,data:paintings}=useQuery({
    queryKey: ['paintings'],
    queryFn: async () => {
      const response = await axios.get('https://painting-and-drawing-server-xi.vercel.app/painting?limit=6');
      const data = response.data
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
        <div>
            <div className="space-y-4 py-7">
                <h1 className="text-3xl font-bold font-playfair text-center"> Craft Items</h1>
                <p className="text-base text-[#fe7354] text-center"><Typewriter 
                loop={false}
                 words={['Here you will find awesome arts and painting . You can upload your painting']}
                 /></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">

                {paintings?.map((single,idx)=><CraftItemsCard key={idx} single={single}></CraftItemsCard>)}

            </div>

              
        </div>
    );
};
CraftItems.propTypes={
    dataLimit :PropTypes.array
}

export default CraftItems;