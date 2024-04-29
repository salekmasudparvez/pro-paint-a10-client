import { useEffect, useState } from "react";
import ArtAndCraftCategoryCard from "./ArtAndCraftCategoryCard";


const ArtAndCraftCategory = () => {
  const[subCategory, setSubcatgorye]=useState([])
  useEffect(()=>{
      fetch('https://painting-and-drawing-server-xi.vercel.app/subcategory')
      .then(res=>res.json())
      .then(data=>{
        setSubcatgorye(data);
      })
      
  },[]);
 
  
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-orange-800 font-playfair">Art And Craft Category</h1>
        <p className="text-gray-400">Painting and drawing are fundamental forms of visual art that involve creating images, compositions, and representations using various mediums, techniques, and styles. Both painting and drawing offer artists a means of expression, communication, and exploration of ideas, emotions, and aesthetics.</p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {subCategory.map((singleSub,idx)=><ArtAndCraftCategoryCard singleSub={singleSub} key={idx} ></ArtAndCraftCategoryCard>)}
        
      </div>
    </div>
  );
};

export default ArtAndCraftCategory;