


const CraftItems = () => {

    return (
        <div>
            <div className="space-y-4 py-7">
                <h1 className="text-3xl font-bold font-playfair text-center"> Craft Items</h1>
                <p className="text-base text-orange-800 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">

                <div className="flex flex-col justify-center duration-1000 items-center border p-2 rounded-xl shadow-xl hover:shadow-2xl">
                    <div><img className={` rounded-xl  `} src="https://i.ytimg.com/vi/dXM6i5-sdVg/maxresdefault.jpg" /></div>
                    <div className={`text-center space-y-3  text-[#f9f9f9] font-playfair font-semibold text-xl `}>
                        <h1 className="text-orange-500">A Beautiful Mountain Landscape</h1>
                        <div className="flex justify-between"><span className="text-base text-gray-500 text-left">Art By Parvez</span> <span className="text-right text-base text-gray-500">Type: Landscape</span></div>
                        <div className="text-sm text-gray-400 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit eos magni quod architecto, optio pariatur possimus nisi voluptates itaque ad? Odio, eaque! Molestias deserunt,</div>
                        <button className="btn btn-outline btn-block  text-white bg-[#F2613F] hover:bg-[#f2603f9d]">View Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CraftItems;