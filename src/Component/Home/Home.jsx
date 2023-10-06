import Services from "../Services/Services";
import Navber from "../Shared/navber/Navber";
import Slider from "../Slider/Slider";
import WhoWA from "../whoWeAre/WhoWA";


const Home = () => {
    return (
        <div>
         
         <Navber></Navber>
         <Slider></Slider>
         <WhoWA></WhoWA>
         <Services></Services>
        </div>
    );
};

export default Home;