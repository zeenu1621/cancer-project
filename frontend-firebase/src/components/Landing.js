import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Image1 from "../assets/img/me/4.jpg"
import Image2 from "../assets/img/me/2.jpg"
import Image3 from "../assets/img/me/5.jpg"
// reactstrap components
import { Container } from "reactstrap";
import { Carousel } from "react-bootstrap";


class LandingPage extends React.Component {
  render() {
    return (
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        
     <Carousel class="carousel slide" data-ride="carousel" style={{marginTop:"10px",borderRadius:"5%",marginBottom:"50px"}}span={12} >

  <Carousel.Item style={{  width: "70%", maxheight: "70%"}}>
    <img
      className="d-block w-100"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{  width: "70%", maxheight: "70%"} }>
    <img
      className="d-block w-100"
      src={Image2}
      alt="second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{  width: "70%", maxheight: "70%"} }>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>  
      
    );
  }
}

export default LandingPage;