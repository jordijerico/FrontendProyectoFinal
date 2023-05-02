import Carousel from 'react-bootstrap/Carousel';

function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\madewithLOVE.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\madewithLOVE.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\madewithLOVE.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;