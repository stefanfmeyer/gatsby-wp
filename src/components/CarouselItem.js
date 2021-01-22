import React from "react"
import Button from 'components/Button';

const CarouselItem = ({ title, text, url }) => {

    const { title, text, url } = CarouselItem
  
    return(
    <CarouselItem />
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{CarouselItem.title}</h3>
        <p>{CarouselItem.text}</p>
        <Button label="Click Me Please"/>
      </Carousel.Caption>
    </Carousel.Item>
    )
  }
  
  export default CarouselItem