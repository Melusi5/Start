import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/slide.css'

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
          className="d-block"
          src="https://media.istockphoto.com/id/1483120808/photo/young-friends-having-their-picture-taken-outdoors.jpg?s=612x612&w=0&k=20&c=jvW5kFzhqznsi1HCw-SiOmNUsq23Fv6uuKFF33RddkU="
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.istockphoto.com/id/1140936741/photo/top-view-of-work-space-photographer-with-digital-camera-flash-cleaning-kit-memory-card.jpg?s=612x612&w=0&k=20&c=s5KK7cEQoexPpbzh1c7ITkUMosfsw5HPu0bPtrMW2cc="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://media.istockphoto.com/id/469327772/photo/photo-of-a-freelancer-sitting-by-computer-working.jpg?s=612x612&w=0&k=20&c=izQi27ALR9Ev21PIroWpYKZ04pkD7hCWw1Ua2VSTS5I="
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