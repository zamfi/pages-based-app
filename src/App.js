import React, { Component } from "react";

import "./styles.css";

function StartPage(props) {
  return (
    <div>
      <p>
        What is your name?
        <br />
        <br />
        <input
          type="text"
          value={props.getData("name")}
          onChange={event => props.setData("name", event.target.value)}
        />
        <br />
        <br />
        What is your birthday?
        <br />
        <br />
        <input
          type="date"
          value={props.getData("birthday")}
          onChange={event => props.setData("birthday", event.target.value)}
        />
      </p>
      <button onClick={() => props.goToPage(WelcomePage)}>Continue</button>
    </div>
  );
}

function WelcomePage(props) {
  return (
    <div>
      <p>
        Welcome, {props.getData("name")}! How would you like to get to your
        destination?
      </p>
      <button onClick={() => props.goToPage(TrainPage)}>Train</button>
      <button onClick={() => props.goToPage(ShipPage)}>Ship</button>
    </div>
  );
}

function TrainPage(props) {
  return (
    <div>
      <p>
        Welcome aboard the choo-choo train! Please make your way to your seat.
        What's the number?
        <br />
        <select>
          <option value="none" />
          <option value="37A">37A</option>
        </select>
      </p>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: StartPage,
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <this.state.page
          getData={name => this.state[name] || ""}
          setData={(name, value) => this.setData(name, value)}
          goToPage={page => this.goToPage(page)}
        />
      </div>
    );
  }
}

export default App;
