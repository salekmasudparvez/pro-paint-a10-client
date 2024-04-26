import About from "../../Components/About";
import Carousel from "../../Components/Carousel";
import CraftItems from "../../Components/CraftItems";
import Stat from "../../Components/Stat";




const Home = () => {
    return (
       <div className="max-w-6xl mx-auto my-10 space-y-14">
         <Carousel/>
         <CraftItems/>
         <About/>
         <Stat/>
       </div>
    );
};

export default Home;