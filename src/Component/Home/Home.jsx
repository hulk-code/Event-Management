import RecentEvent from "../RecentWork/RecentEvent";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";

import Slider from "../Slider/Slider";
import WhoWA from "../whoWeAre/WhoWA";


const Home = () => {
    return (
        <div>
         
         
         <Slider></Slider>
         <WhoWA></WhoWA>
         <Services></Services>
         <RecentEvent></RecentEvent>
         <Footer></Footer>
        </div>
    );
};

export default Home;