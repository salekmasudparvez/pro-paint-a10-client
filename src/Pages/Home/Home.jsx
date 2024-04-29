import { useLoaderData } from "react-router-dom";
import About from "../../Components/About";
import Carousel from "../../Components/Carousel";
import CraftItems from "../../Components/CraftItems";
import Stat from "../../Components/Stat";
import ArtAndCraftCategory from "../../Components/ArtAndCraftCategory";




const Home = () => {
  const data = useLoaderData();
  const dataLimit = data.slice(0,6)
  
    return (
       <div className="max-w-6xl mx-auto my-10 space-y-14">
         <Carousel/>
         <CraftItems dataLimit={dataLimit}/>
         <ArtAndCraftCategory/>
         <About/>
         <Stat/>
       </div>
    );
};

export default Home;