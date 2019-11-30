import React from "react";
import { Navbar, NavbarBrand,Collapse, Nav, NavItem, NavLink ,Container,Row,Col} from "reactstrap";
import {Link } from 'react-router-dom'
import Image1 from "../assets/img/me/doc.jpg"
import Image2 from "../assets/img/me/foo.jpg"
import Image3 from "../assets/img/me/ex.jpg"
class recommendation extends React.Component{
 
  handleDoctor=()=>{
window.open("https://www.marham.pk/find-a-doctor");
  };

  handleFood=()=>{
    window.open("https://www.medicalnewstoday.com/articles/316720.php#foods-to-eat");
      };


  handlehealth=()=>{
    window.open("https://www.maurerfoundation.org/how-to-reduce-your-risk-of-breast-cancer-with-exercise/");
          };




    render() {
        return (

          <div>
   

  <div className="card-deck"  style={{ marginTop: "40px"}}>
  <div className="card"style={{background: "pink"}} >
  <img src={Image1} alt="Doctor" />
  <div classname="card-body" >
    <h5 className="card-title" style={{color:"black"}}>Doctors</h5>
    <p className="card-text" style={{color:"black"}}>Yeh description pyari english main likh do</p>
    <button  className="btn btn-info" onClick={this.handleDoctor}>More</button>
    
  </div>
</div>
<div className="card" style={{background: "pink"}}>
  <img src={Image2} alt="Food" />
  <div classname="card-body">
    <h5 className="card-title" style={{color:"black"}}>Food and Nutrition</h5>
    <p className="card-text" style={{color:"black"}}>Yeh description pyari english main likh do</p>
    
    <button  className="btn btn-info" onClick={this.handleFood}>More</button>
    
  </div>
</div>

<div className="card" style={{background: "pink"}}>
  <img src={Image3} alt="Health" />
  <div classname="card-body">
    <h5 className="card-title"  style={{color:"black"}}>Healthy Exercises</h5>
    <p className="card-text"  style={{color:"black"}}>Yeh description pyari english main likh do</p>
    <button  className="btn btn-info" onClick={this.handlehealth}>More</button>
  </div>
</div>
    </div>
    </div>
  
        )
}
}
export default recommendation;