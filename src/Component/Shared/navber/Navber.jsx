import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navber = () => {
  
  const {user , LogOut}=useContext(AuthContext)
  console.log(user);
 
    const navLink=<>
      <li> <NavLink to='/'>Home</NavLink></li>
      <li> <NavLink to='/OurServices'>Our_SerVices</NavLink></li>
      <li> <NavLink to='/contact'>Contact_Us</NavLink></li>
      <li> <NavLink to='/eventEquipment'>Equipment Rental</NavLink></li>
      <li> <NavLink to='/eventcategory'>Offer Category</NavLink></li>
    </>
    const hanadleLogOut=()=>{
      LogOut()
      .then(result =>{
        console.log(result);
      })
      .catch(error =>{
        console.error(error);
      })
    }
    return (
      
        <div className="navbar font-poppin lg:w-3/4 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
      </ul>
    </div>
    <img  className="h-20 hidden lg:block " src="https://i.ibb.co/kSwC4G3/logo2.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center">
    {
      user?.displayName
     }
       {
        user && <img className="w-5 h-5" src={user?.photoURL} alt="" />
       }
    </div>
    
    {
      user ? <button className="btn btn-ghost" onClick={hanadleLogOut} >Log Out</button> 
      :
      <Link to='/login'>
  <button className="btn btn-ghost">Login</button>
  </Link>
    }

    <Link to='/register'></Link>
  </div>
</div>
    );
};

export default Navber;