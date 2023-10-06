import { Link, NavLink } from "react-router-dom";


const Navber = () => {
    const navLink=<>
      <li> <NavLink to='/'>Home</NavLink></li>
      <li> <NavLink to='/OurServices'>Our_SerVices</NavLink></li>
      <li> <NavLink to='/contact'>Contact_Us</NavLink></li>
    </>
    return (
        <div className="navbar font-poppin w-3/4 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
      </ul>
    </div>
    <img  className="h-16 hidden lg:block " src="/src/assets/logo2.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
  
<Link to='/login'><button className="btn btn-ghost">Login</button></Link>
  </div>
</div>
    );
};

export default Navber;