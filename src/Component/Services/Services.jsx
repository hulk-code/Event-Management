import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
const Services = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    useEffect(() => {
        AOS.init({
            duration: 1000, 
          });
      }, []);
    return (
        <div>
            <div className="  font-poppin">
            <div>
                    <h1 className="text-4xl font-bold text-center mb-5 ">our Services</h1>
                </div>
                <div>
                  
                    {
                        cards.map(card => <div data-aos="fade-down-right" key={card.name}>
                            <div >
                                <div className="card card-side lg:w-1/2 mb-5 mx-auto bg-red-100 shadow-xl">
                                    <figure><img className="w-[400px] h-[300px]"  src={card.image} alt="Movie" /></figure>
                                    <div className="card-body my-auto">
                                        <h2 className="card-title">{card.name}</h2>
                                        <p>{card.price}</p>
                                        <div className="card-actions justify-end">
                                        <Link to={`/details/${card.id}`}><button className="btn btn-outline btn-warning">See_Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                

            </div>

        </div>
    );
};

export default Services;