import { useContext } from "react";
import Navber from "../Shared/navber/Navber";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Login = () => {
    const {logIn }=useContext(AuthContext)
    const provider=new GoogleAuthProvider();
    
    const location=useLocation();
    const nevigate=useNavigate()

  const handlLogin= e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form=new FormData(e.currentTarget)
   
    const password=form.get('password')
    const email=form.get('email')
    console.log(password,email);
    logIn(email,password)
    .then(result =>{
      console.log(result.user);
      nevigate(location ?.state ?location.state : '/')

    })
    .catch(error =>{
      console.error(error);
    })
  }
     const handleGoogleLogin =()=>{
              signInWithPopup(auth,provider)
              .then(result =>{
                console.log(result.user);
              })
              .catch(error =>{
                console.error(error);
              })
     }

    return (
        <div>
          <Navber></Navber>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Here!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handlLogin}>
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        <p className=" m-auto font-medium">have an account?<Link to='/register'>Register</Link></p>
        <button onClick={handleGoogleLogin} className="btn btn-primary">gogole login</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;