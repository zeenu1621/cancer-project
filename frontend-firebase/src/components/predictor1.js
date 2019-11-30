import React from "react";
import { Navbar, NavbarBrand,Collapse, Nav, NavItem, NavLink ,Container,Row,Col} from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Link,BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import * as routes from "../constants/routes";
var pdf2 = require("html-pdf")
var fs = require("fs")
var path = require("path")
//import "./addemp.css";

const API = "http://localhost:5000/getprediction";
class predictor1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      prediction: "",
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      field9: "",
      field10: "",
      field11: "",
      field12: "",
      field13: "",
      field14: "",
      field15: ""
    };
  }

  makePDF = () =>{
    var fName = "_report.pdf"
    var newDate = new Date();
    var fDate = String(newDate).slice(0.15);

    var options = {
      directory: "../public/files/recommendations/",
      type: "pdf",
      orientation: "landscape",
      quality: "75",
      paginationOffset: 1,
      header: {
        height: "1mm"
      },
      footer: {
        height: "1mm",
        contents: "<div>Powered by @Women</div>"
      },
      border: 0
    };
  
    var html = `<html><body><div style="width:1000px; height:600px; padding:20px; text-align:center; border: 10px solid #787878">
    <div style="width:950px; height:550px; padding:20px; text-align:center; border: 5px solid #787878">
           <span style="font-size:50px; font-weight:bold">Certificate of Recommendation</span>
           <br><br>
           <span style="font-size:25px"><i>This is to certify that</i></span>
           <br><br>
           <span style="font-size:30px"><b>${this.state.field1}</b></span><br/><br/>
           <span style="font-size:25px"><i>has completed a session under a mentor with @Women. This certificate stands to testify that they were professional and cordial
           during the exchange and learned valuable lessons regarding the domain of the session.</i></span> <br/><br/>
           <span style="font-size:25px;text-align:center"><ul><ol>- ${this.state.field13}</ol><ol>- ${this.state.field13}</ol><ol>- ${this.state.field4}</ol>
           </ul></span><br/>
           <span style="font-size:20px">under mentorship the of <b>${this.state.field15}</b></span><br/>
           <span style="font-size:25px"><i>dated</i></span><br>
          <span style="font-size:30px">${this.state.field8}</span>
    </div>
    </div></body></html>`;

    pdf2.create(html, options).toFile("public/files/reports/"+fName, function(err, file){
      if (err)
      {
        console.log(err)
      }
      else{
        console.log(file.filename)
      }
    })


  }
  submitForm() {
    let data = {
      "Diagnosis Age": this.state.field1,
      "ER Status By IHC": this.state.field2,
      "Person Gender": this.state.field3,
      "Neoplasm Histologic Type Name": this.state.field4,
      "IHC-HER2": this.state.field5,
      "Primary Lymph Node Presentation Assessment Ind-3": this.state.field6,
      "Menopause Status": this.state.field7,
      "First Pathologic Diagnosis Biospecimen Acquisition Method Type": this
        .state.field8,
      "Oncotree Code": this.state.field9,
      "Primary Tumor Site": this.state.field10,
      "PR status by ihc": this.state.field11,
      AgeCat: this.state.field12,
      "Fraction Genome Altered": this.state.field13,
      "Lymph Node(s) Examined Number": this.state.field14,
      "Mutation Count": this.state.field15
    };
    console.log(data);
    
    fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.finalPrediction);
        this.setState({ prediction: responseJson.finalPrediction });
        //this.setState({pressed: false});
      });
      console.log(this.state.prediction)
      this.makePDF();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log([e.target.name] + e.target.type + e.target.value);
  }
  render() {
    return (
      
<div>
<Navbar className="justify-content-center">
    <NavItem>
      <NavLink href="/predictor2">predictor2</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/survival">Survival Assessment</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/recommendations">Recommendations</NavLink>
    </NavItem>
    
  </Navbar>

        <h1 className="centered" style={{color:"black"}}>Predictor1</h1>
        
    
     <div  style={{backgroundColor:"rgba(0,0,0,0.5)",margin:"10px",borderRadius:"5%"}}>
      
        <Form onSubmit={this.onSubmit} style={{marginBottom:"10px",padding:"20px"}}>
       
        <FormGroup>
        <Label  style={{color:"white"}}>Diagnosis Age</Label> 
        <Input
              type="text"
              placeholder="diagnostic age"
              onChange={this.onChange.bind(this)}
              value={this.state.field1}
              name="field1"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>ER Status</Label> 
        <Input
              type="text"
              placeholder="ER Status"
              onChange={this.onChange.bind(this)}
              value={this.state.field2}
              name="field2"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>Gender</Label> 
        <Input
              type="text"
              placeholder="Gender"
              onChange={this.onChange.bind(this)}
              value={this.state.field3}
              name="field3"
            />
          </FormGroup>
          <FormGroup>
        <Label  style={{color:"white"}}> Neoplasm Histologic Type Name</Label> 
        <Input
             type="text"
              placeholder=" Neoplasm Histologic Type Name"
              onChange={this.onChange.bind(this)}
              value={this.state.field4}
              name="field4"
            />
          </FormGroup>
          <FormGroup>
        <Label for="exampletext" style={{color:"white"}}> HER2 status</Label> 
        <Input
              type="text"
              placeholder=" HER2 status"
              onChange={this.onChange.bind(this)}
              value={this.state.field5}
              name="field5"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>Primary Lymph Node Assessment</Label> 
        <Input
              type="text"
              placeholder=" Primary Lymph Node Assessment"
              onChange={this.onChange.bind(this)}
              value={this.state.field6}
              name="field6"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>Menopause Status</Label> 
        <Input
             
              type="text"
             
              placeholder="Menopause Status"
              onChange={this.onChange.bind(this)}
              value={this.state.field7}
              name="field7"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>First Pathologic Diagnosis Biospecimen Acquisition Method Type</Label> 
        <Input
            
              type="text"
             
              placeholder="First Pathologic Diagnosis Biospecimen Acquisition Method Type"
              onChange={this.onChange.bind(this)}
              value={this.state.field8}
              name="field8"
            />
          </FormGroup>
          <FormGroup>
        <Label  style={{color:"white"}}>Oncotree Code</Label> 
        <Input
             
              type="text"
             
              placeholder="Oncotree Code"
              onChange={this.onChange.bind(this)}
              value={this.state.field9}
              name="field9"
            />
          </FormGroup>
          <FormGroup>
        <Label  style={{color:"white"}}> Primary Tumor Site</Label> 
        <Input
             
              type="text"
             
              placeholder=" Primary Tumor Site"
              onChange={this.onChange.bind(this)}
              value={this.state.field10}
              name="field10"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>PR status</Label> 
        <Input
              
              type="text"
           
              placeholder="PR status"
              onChange={this.onChange.bind(this)}
              value={this.state.field11}
              name="field11"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>Age Category</Label> 
        <Input
              
              type="text"
             
              placeholder="Age Category"
              onChange={this.onChange.bind(this)}
              value={this.state.field12}
              name="field12"
            />
          </FormGroup>
          <FormGroup>
        <Label  style={{color:"white"}}>Fraction Genome</Label> 
        <Input
            
              type="text"
              
              placeholder="Fraction Genome"
              onChange={this.onChange.bind(this)}
              value={this.state.field13}
              name="field13"
            />
          </FormGroup>
         
          <FormGroup>
        <Label style={{color:"white"}}>Lymph Node Examined Number</Label> 
        <Input
              
              type="text"
              placeholder="Lymph Node Examined Number"
              onChange={this.onChange.bind(this)}
              value={this.state.field14}
              name="field14"
            />
          </FormGroup>
          <FormGroup>
        <Label style={{color:"white"}}>Mutation Count</Label> 
        <Input
              
              type="text"
             
              placeholder="Mutation Count"
              onChange={this.onChange.bind(this)}
              value={this.state.field15}
              name="field15"
            />
          </FormGroup>

          <div className="text-center">
          <input
              type="submit"
              onClick={this.submitForm.bind(this)}
              value="Predict"
            />
              <h5>Likelihood of having:{this.state.prediction} </h5>
          </div>
          </Form>
      </div>
        </div>
    );
  }
}

export default predictor1;
