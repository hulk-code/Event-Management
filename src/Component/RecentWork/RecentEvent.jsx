import { BiPhoneCall } from "react-icons/bi";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from "react";

const RecentEvent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
          });
      }, []);
    return (
        <div className="mt-16 mb-16 font-poppin bg-slate-300">
          <h1 className=" text-center text-4xl font-semibold ">Our Recent Program</h1>
            <div className="lg:flex items-center justify-evenly lg:gap-32 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className="card w-[300px] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/RydW2sk/w1.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">weadding Program</h2>


                    </div>
                </div>
                <div className="card w-[300px]  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/LrnvJ4d/w-2.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">weadding Program</h2>


                    </div>
                </div>
                <div className="card w-[300px] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/fvRwMmP/w-3.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BIRTH DAY EVENT</h2>


                    </div>
                </div>
                <div className="card w-[300px] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/k6hFJfh/w-4.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Program STAGE</h2>
                        


                    </div>
                </div>
               
            </div>
            <div data-aos="zoom-out-left">
                <h1 className="font-bold text-4xl ">Trust Us</h1>
                <p>We Make Your program Better</p>
                <p>Your Happiness Our Achivement</p>
               <p className="font-bold">Contact-Us <button className="btn btn-accent"><BiPhoneCall></BiPhoneCall>01999999999</button></p>
            </div>
            </div>

            
        </div>
    );
};

export default RecentEvent;