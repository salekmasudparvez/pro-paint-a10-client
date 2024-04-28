import CraftItemsCard from "./CraftItemsCard";



const CraftItems = ({dataLimit}) => {

    return (
        <div>
            <div className="space-y-4 py-7">
                <h1 className="text-3xl font-bold font-playfair text-center"> Craft Items</h1>
                <p className="text-base text-orange-800 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">

                {dataLimit.map((single,idx)=><CraftItemsCard key={idx} single={single}></CraftItemsCard>)}

            </div>
        </div>
    );
};

export default CraftItems;