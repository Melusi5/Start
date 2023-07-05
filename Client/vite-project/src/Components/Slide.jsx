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
          src="https://media.istockphoto.com/id/1428274217/photo/cheerful-african-american-woman-in-supermarket-choosing-fresh-grocery-using-phone.jpg?s=612x612&w=0&k=20&c=Qm510aAK7Zgs7K5k8tEKmY_XU3UUH2bz7wQEKa9lvTc="
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
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
          src="https://media.istockphoto.com/id/606211940/photo/fresh-vegetables-in-rajasthan-india-market.webp?b=1&s=170667a&w=0&k=20&c=ke5_stHauyLMX_6pIO6s-TxtTEGyE-GQ1rwGVVjC6VA="
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