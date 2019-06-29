import React, {Component} from 'react'

class SecondRandom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button style={{visibility: this.props.status ? "visible" : "hidden"}}>TEST BUTTON 2</button>
        )
    }
}

export default SecondRandom