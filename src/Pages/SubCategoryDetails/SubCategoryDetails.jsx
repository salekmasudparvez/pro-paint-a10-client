import {  useParams } from "react-router-dom";
import SubCategoryDetailsCard from "./SubCategoryDetailsCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PulseLoader } from "react-spinners";


const SubCategoryDetails = () => {
    const name = useParams();
   //console.log(name)
    const {isLoading,data:getSpacificCards}=useQuery({
        queryKey: ['getSpacificCards',name],
        queryFn: async () => {
            const response = await axios.get(`https://painting-and-drawing-server-xi.vercel.app/subcategoryDetails/${name?.id}`);
            const data = response.data;
            return data;
        }
    })
    console.log(getSpacificCards)
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
        <div className="max-w-5xl mx-auto py-10 space-y-6">
            <div className="space-y-4 text-center">
                 <h1 className="text-3xl font-bold font-playfair">Subcategory:{name?.id}</h1>
                 
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

               {getSpacificCards?.map((card,idx)=><SubCategoryDetailsCard key={idx} card={card}></SubCategoryDetailsCard>)}

            </div>
            
        </div>
    );
};

export default SubCategoryDetails;