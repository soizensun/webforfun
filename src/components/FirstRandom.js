import React, {Component} from 'react'

class FirstRandom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={() => this.props.runSecondRandom()} style={{visibility: this.props.status ? "visibility" : "hidden"}}>TEST BUTTON 1</button>
        )
    }
}

export default FirstRandom