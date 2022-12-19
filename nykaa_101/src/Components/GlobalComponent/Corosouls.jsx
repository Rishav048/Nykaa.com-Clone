
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/5a7cbd36-14ac-499d-967a-2bd693a4f3da.jpg?tr=w-1200,cm-pad_resize"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/52562738-b7fc-4783-840b-fb46a0dad458.jpg?tr=w-1200,cm-pad_resize"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/83014540-e58e-4f8d-bd76-8772dd6cbf74.jpg?tr=w-1200,cm-pad_resize"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;














