import React, { Component } from 'react'
import FirstRandom from './FirstRandom'
import SecondRandom from './SecondRandom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false
    }
  }

  runSecondRandom = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    return (
      <div className="App">
        <FirstRandom 
          status={!this.state.hidden} 
          runSecondRandom={this.runSecondRandom}
        />
        <SecondRandom 
          status={this.state.hidden}
        />
      </div>
    )
  }
}

export default App
