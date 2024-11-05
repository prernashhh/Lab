import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a protected page accessible after login.</p>
      <Carousel>
        <Carousel.Item>
          <img src="image1.jpg" alt="Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="image2.jpg" alt="Image 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="image3.jpg" alt="Image 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="image4.jpg" alt="Image 4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
