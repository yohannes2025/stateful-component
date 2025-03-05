import React, { Component } from "react";

class StatefulGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
      count: 0,
    };

    // Bind the methods to the instance
    this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
  }

  handleClick() {
    this.setState(
      {
        introduction:
          this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
        buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
      },
      () => {
        console.log("new state", this.state.introduction);
        console.log("new state", this.state.buttonText);
      }
    );

    console.log(this.state.introduction); // This will not log the updated state immediately
    console.log(this.state.buttonText); // This will not log the updated state immediately
  }

  increment() {
    this.setState((prevState, prevPops) => {
      console.log('Previous State:', prevState)
      console.log('Previous State:', prevPops)
      return{
        count: prevState.count + 1,
      }    
      
    });
  }
  

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
        <button onClick={this.increment}>Increment</button>
        <p>You have clicked {this.state.count} times</p>
      </div>
    );
  }
}

export default StatefulGreeting;
