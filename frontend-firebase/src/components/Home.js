import React, { Component } from "react";
import withAuthorization from "./withAuthorization";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { db } from "../firebase";
import Image1 from "../assets/img/me/gen.jpg"
import Image2 from "../assets/img/me/sur.jpg"
import Image3 from "../assets/img/me/rec.jpg"
import Navigation from "./Navigation";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    loading: true
  };

  componentDidMount() {
    // db.onceGetUsers().then(res => {
    //   this.setState({
    //     users: res.val()
    //   });
    // });

    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        loading: false
      });
    });
  }

  render() {
    const { users, username, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
     
      <div>
          <Navigation></Navigation>
        <h1>Welcome to MEDZEMO.</h1>
        <div className="card-deck" style={{ marginTop: "40px"}}>
        <div className="card" >
        <img src={Image1} alt="Doctor" />
  <div classname="card-body" >
    <h5 className="card-title" style={{color:"black"}}>Breast Cancer calculators</h5>
    <p className="card-text" style={{color:"black"}}>Yeh description pyari english main likh do</p>
    <button>
    <Link to="/predictor1">predictor1
      </Link>
      </button>



      <button>
    <Link to="/predictor2">predictor2
      </Link>
      </button>
    
  </div>
        </div>

        <div className="card" >
        <img src={Image2} alt="Doctor" />
  <div classname="card-body"  >
    <h5 className="card-title" style={{color:"black"}}>Survival Assessment</h5>
    <p className="card-text" style={{color:"black"}}>Yeh description pyari english main likh do</p>
    <button>
    <Link to="/survival">Survival Assessment
      </Link>
      </button>
     
    
  </div>
        </div>


        <div className="card" >
        <img src={Image3} alt="Doctor" />
  <div classname="card-body" >
    <h5 className="card-title" style={{color:"black"}}>Recommendations</h5>
    <p className="card-text" style={{color:"black"}}>Yeh description pyari english main likh do</p>
    <button>
    <Link to="/recommendation">Recommendations
      </Link>
      </button>
     
    
  </div>
        </div>
        </div>
      
        
        {!loading && <p className="centered">Hello {username}!</p>}

       
        {/* {!!users && <UserList users={users} />} */}
      </div>
    );
  }
}

// const UserList = ({ users }) => (
//   <div>
//     {console.log("users", users)}
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key => (
//       <div key={key}>{users[key].username}</div>
//     ))}
//   </div>
// );

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
