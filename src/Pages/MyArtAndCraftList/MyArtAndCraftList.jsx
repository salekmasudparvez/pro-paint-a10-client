import {  useLoaderData } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import MyArtAndCrafCard from "./MyArtAndCrafCard";
import { useState } from "react";


const MyArtAndCraftList = () => {
    const AllData = useLoaderData();
   
    const {user}=useAuth();
    // console.log(AllData)
    // console.log(user.email);
    const MyDataLoaded = AllData.filter(data=>data.email===user.email);
    const [MyData,setMyData]=useState(MyDataLoaded)
    
    return (
        <div className="max-w-5xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {MyData.map((privateData,idx)=><MyArtAndCrafCard key={idx} setMyData={setMyData} MyData={MyData} privateData={privateData}></MyArtAndCrafCard>)}  
        </div>
    );
};

export default MyArtAndCraftList;

