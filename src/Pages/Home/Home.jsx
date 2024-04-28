import { useLoaderData } from "react-router-dom";
import About from "../../Components/About";
import Carousel from "../../Components/Carousel";
import CraftItems from "../../Components/CraftItems";
import Stat from "../../Components/Stat";




const Home = () => {
  const data = useLoaderData();
  const dataLimit = data.slice(0,5)
  
    return (
       <div className="max-w-6xl mx-auto my-10 space-y-14">
         <Carousel/>
         <CraftItems dataLimit={dataLimit}/>
         <About/>
         <Stat/>
       </div>
    );
};

export default Home;