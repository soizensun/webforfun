import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {

  // state = {
  //   size:'large'
  // };
  

  render() {
    // const { size } = this.state;

    return (
      <div className="App">
        <Button type="primary" block >
          RANDOM
        </Button>
        </div>
    );
  }
}

export default App;
