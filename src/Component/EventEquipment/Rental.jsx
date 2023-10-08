import Navber from "../Shared/navber/Navber";


const Rental = () => {
    return (
                       
       <div>
           <Navber></Navber>
         <div className="font-poppin w-3/4 lg:mx-auto ">
            <h1 className="text-5xl font-bold text-center lg:mb-10 lg:mt-10 " >Our Equipment</h1>
            <p>
                <ol>
                    <h1 className="text-3xl font-semibold text-center mb-2 ">Tableware and Linens:</h1>
                    <li className="text-center text-slate-500 flex items-center shadow-2xl">  
                    <img src="https://i.ibb.co/Mk7Ym6S/r1.jpg" alt="" />

                       <span className="text-lg font-medium "> Daily Rental Price:</span> $22 per set (e.g., a set includes a tablecloth, napkins, and dinnerware for one guest). <br />
                        Additional pricing options for larger sets or premium items  </li>
                </ol>
                <ol>
                    <h1 className="text-3xl font-semibold text-center mb-2 mt-5 ">Decorative Items:</h1>
                    <li className="text-center text-slate-500 flex items-center shadow-2xl">  
                       <img src="https://i.ibb.co/wBYLnqS/r4.jpg" alt="" />
                       <span className="text-lg font-medium "> Daily Rental Price:</span>  $X per item (e.g., per centerpiece, vase, or drapery panel). <br />
                       Consider offering package deals for multiple decorative items rented together  </li>
                </ol>
                <ol className="mb-32">
                    <h1 className="text-3xl font-semibold text-center mb-2 mt-5">Audiovisual Equipment:</h1>
                    <li className="text-center text-slate-500 flex items-center shadow-2xl ">  
                    <img src="https://i.ibb.co/D7GCvqD/r3.jpg" alt="" className="h-[350px] w-[760px]" />
                       <span className="text-lg font-medium "> Daily Rental Price:</span> $X per tent size (e.g., per 20' x 20' tent or per clear span structure). <br />
                       Additional charges for accessories like sidewalls or flooring, if needed  </li>
                </ol>
                
            </p>
        </div>
       </div>
    );
};

export default Rental;