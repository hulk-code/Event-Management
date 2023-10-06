  import './Slider.css'

const Slider = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="title">
          <h2 className='font-poppin text-5xl font-extrabold'>WADDING PLANNING</h2>
         
        </div>
    <img src="/src/assets/slider1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/src/assets/slider2.jpg" className="w-full" />
    <div className="title">
          <h2 className='font-poppin text-5xl font-extrabold'>BRITHDAY PLANNING AND DECORETION</h2>
         
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/src/assets/babyS.webp" className="w-full" />
    <div className="title">
          <h2 className='font-poppin text-5xl font-extrabold'>BABY SHOWWER PLANNIG</h2>
         
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/src/assets/slider4.jpg" className="w-full" />
    <div className="title">
          <h2 className='font-poppin text-5xl font-extrabold '>ENGAGEMENT PERTIES</h2>
         
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;