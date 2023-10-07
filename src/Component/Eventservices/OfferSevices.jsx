import Navber from "../Shared/navber/Navber";


const OfferSevices = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <p className="text-5xl font-bold text-center lg:mb-10 lg:mt-10 ">What We Offering
                </p>
                <div className="w-3/4 mx-auto">
                <ol>
                    
                    <li className="text-center text-slate-500 flex items-center shadow-2xl  gap-16 mb-10">  
                    <img src="/src/assets/o1.jpg" alt="" />

                       <h1 className="text-3xl font-semibold text-center mb-2 ">PHOTOGRAPHY</h1> </li>
                </ol>
                <ol>
                   
                    <li className="text-center text-slate-500 flex items-center shadow-2xl gap-16 mb-10">  
                       <img src="/src/assets/o5.jpg" alt="" />
                       <h1 className="text-3xl font-semibold text-center mb-2 mt-5 ">Entertainment and <br /> Performers</h1>  </li>
                </ol>
                <ol className="mb-32">
                   
                    <li className="text-center text-slate-500 flex items-center gap-16 shadow-2xl ">  
                    <img src="/src/assets/o4.jpg" alt="" className="h-[350px] w-[600px]" />
                    <h1 className="text-3xl font-semibold text-center mb-2 mt-5">Event Planning and <br /> Coordination</h1>  </li>
                </ol>
                
                </div>

            </div>
        </div>
    );
};

export default OfferSevices;