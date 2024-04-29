import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCategoryDetailsCard from "./SubCategoryDetailsCard";


const SubCategoryDetails = () => {
    const [allData,setAllData]=useState([])
    const subData=useLoaderData();
    const { subcategory, description } = subData;
    useEffect(()=>{
        fetch('https://painting-and-drawing-server-xi.vercel.app/painting')
        .then(res=>res.json())
        .then(data=>{
            setAllData(data)
        })
    },[]);
    console.log(allData);
    const getSpacificCards=allData.filter(singleData=>singleData.subcategory_Name===subcategory);
    

    return (
        <div className="max-w-5xl mx-auto py-10 space-y-6">
            <div className="space-y-4 text-center">
                 <h1 className="text-3xl font-bold font-playfair">Subcategory:{subcategory}</h1>
                 <p className="text-light text-base">{description}</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

               {getSpacificCards.map((card,idx)=><SubCategoryDetailsCard key={idx} card={card}></SubCategoryDetailsCard>)}

            </div>
            
        </div>
    );
};

export default SubCategoryDetails;