import React, { Component } from 'react';
import './App.css';


class App extends Component {

  hideFunc = () => {
    // var x = document.getElementById("random");
    // var y = document.getElementById("happycard");
    // if (x.style.display === "none") {
    //     x.style.display = "inline-block";
    //     y.style.display = "none";
    //     x.style.opacity = "1"

    // } else {
    //     y.style.display = "inline-block";
    //     x.style.display = "none";
    //     x.style.opacity = "0"
    // }
  }

  render() {
    return (
      <div className="App">
      <div class="container">
              <div classname="row justify-md-content-center">
                  <div classname="col-align-self-center btn-random">
                      <button classname="btn btn-success" id="random" onclick={this.hideFunc()}>Random</button>
                  </div>
                  <div classname="w-100"></div>
                  <div classname="col-align-self-center happycard" id="happycard">
                      <div>
                      </div>
                      <div>
                          <button classname="btn btn-primary btn-confirm" onclick="">Random</button>
                          <button classname="btn btn-secondary btn-confirm" onclick={this.hideFunc()}>Random</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
