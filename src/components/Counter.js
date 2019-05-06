import React from "react";
import CardBody from "./CardBody";
import "../components/style.css";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render(props) {
    return (
      <nav className="jumbotron">
      <ul className="nav justify-content-center">
    <li className="nav-item">
      <h1>Clicky Faces Game</h1>
    </li>
    <li className="nav-item">
      <h2 className="nav-link disabled" href="/">Click on an Image to earn points, but don't click on any more than once!</h2>
    </li> 

  </ul>
     
        <CardBody
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
  </nav>
    )
    
    
    

    };
  }


export default Counter;
