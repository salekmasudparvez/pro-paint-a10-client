
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import MyArtAndCrafCard from "./MyArtAndCrafCard";
import {  useState } from "react";


const MyArtAndCraftList = () => {
    const AllData =useLoaderData()
    const { user } = useAuth();

    const MyDataLoaded = AllData.filter(data => data.email === user.email);
    const [MyData, setMyData] = useState(MyDataLoaded)

    const handleSort = (num) => {
        if (num === 1) {
            const sortByYes = MyDataLoaded.filter(AllData => AllData.customization === "Yes");
            setMyData([...sortByYes])
        }
        if (num === 0) {
            const sortByNo = MyDataLoaded.filter(AllData => AllData.customization === "No");
            setMyData([...sortByNo])
        }
        if (num === 3) {
            setMyData([...MyDataLoaded])
        }
    }
    return (
        <div className="max-w-5xl mx-auto py-10 space-y-10">
            <div className="w-full flex justify-center">
                <details className="dropdown ">
                    <summary className="m-1 btn bg-orange-700 text-white">Sort By Customization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-orange-700 text-white  rounded-box w-40">
                        <li onClick={() => handleSort(1)}><a>Yes</a></li>
                        <li onClick={() => handleSort(0)}><a>No</a></li>
                        <li onClick={() => handleSort(3)}><a>Reset</a></li>
                    </ul>
                </details>
            </div>
            <div className=" gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {MyData.map((privateData, idx) => <MyArtAndCrafCard key={idx} setMyData={setMyData} MyData={MyData} privateData={privateData}></MyArtAndCrafCard>)}
            </div>
        </div>
    );
};

export default MyArtAndCraftList;

