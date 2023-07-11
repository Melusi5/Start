import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1176911398/photo/young-male-youtuber.jpg?s=612x612&w=0&k=20&c=N0Ny52MZPTC5drcQXimOGJbqCev_2yEOKTyWWgTRFcU="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/546763388/photo/the-perfect-vantage-point.jpg?s=612x612&w=0&k=20&c=o5XHlEhG_IkXq3i1_zwW4E_0hi5fulOBogSPyIy2uZA="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p> 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    </div>
  )
}

export default Slide