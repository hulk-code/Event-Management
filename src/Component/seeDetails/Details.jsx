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
          <h1 className="text-5xl font-bold mb-5 mt-5 text-center">{card.name}</h1>
          <img className="mx-auto" src={card.image} alt="" />
          <p className="mt-5 font-semibold p-5">{card.description}</p>
          <div className="mt-10">
            <p className="text-5xl font-bold mb-5 mt-5 text-center">Our Work</p>
            <div className="flex w-1/2 gap-7 m-auto">
             
              <div className="relative ">
                <img className="w-[400px] h-[300px] rounded-full" src={card.image1} alt="" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">Click To Booked</p>
                </div>
              </div>
      
          
              <div className="relative">
                <img className="w-[400px] h-[300px] rounded-full" src={card.image2} alt="" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">Click To Booked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Details;