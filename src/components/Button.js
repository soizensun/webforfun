import React, {Component} from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: ""
        }
    }

    render() {
        return (
            <button>TEST BUTTON</button>
        )
    }
}

export default Button