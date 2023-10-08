import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Shared/navber/Navber";


const Details = () => {
    const carddata=useLoaderData()
    const{id}=useParams()
     const card=carddata.find(cardDetils => cardDetils.id == id)
     console.log(card);
    return (
        
        <div className="bg-gray-300">
        <Navber></Navber>
        <div className="font-poppin w-3/4 mx-auto bg-white">
          <h1 className="text-5xl font-bold p-5 lg:p-16 text-center">{card.name}</h1>
          <img className="mx-auto border rounded-md" src={card.image} alt="" />
          <p className="mt-5 font-semibold lg:p-11">{card.description}</p>
          <div className="mt-10">
            <p className="text-5xl font-bold mb-5 mt-5 text-center">Our Work</p>
            <div className="flex w-1/2 gap-7 m-auto">
             
              <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative mb-10">
                <img className=" lg:w-[450px] lg:h-[280px] rounded-full" src={card.image1} alt="" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">Click To Booked</p>
                </div>
                
              </div>
      
          
              <div className="relative">
                <img className=" lg:w-[450px] lg:h-[280px] rounded-full" src={card.image2} alt="" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">Click To Booked</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Details;