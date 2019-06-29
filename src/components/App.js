import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Button />
      </div>
    )
  }
}

export default App
