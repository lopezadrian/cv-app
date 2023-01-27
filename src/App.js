import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      topic: { 
        text: '',
      },
      topics: [],
    };
  }

  render() {
    const { task, tasks } = this.state;

    return <div>Hello World</div>;
  }
}

export default App;
