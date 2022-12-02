import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Carosle() {
  return (
    <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=   "https://premierdesigncustomhomes.com/wp-content/uploads/2018/11/Custom-Home-Floor-Plans-NJ.jpg" class="rounded mx-auto d-block"
        alt="First slide"
      />
      <Carousel.Caption>
      
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://nococustomhomes.com/wp-content/uploads/2016/06/willow-main.jpg" class="rounded mx-auto d-block"
        alt="Second slide"
      />
      <Carousel.Caption>
        
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.pinimg.com/736x/aa/9c/98/aa9c98808f9ed8bd069d70747674926f.jpg" class="rounded mx-auto d-block"
        alt="Third slide"
      />
      <Carousel.Caption>
        
        <p>
         
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

 

export default Carosle



