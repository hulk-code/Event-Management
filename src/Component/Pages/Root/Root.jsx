import { Outlet } from "react-router-dom";
import Navber from "../../Shared/navber/Navber";



const Root = () => {
    return (
        <div>
             <Navber></Navber>
            
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;