import React, {Component} from 'react'
import '../css/FirstRandom.css'

class FirstRandom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <button className="norButton" onClick={() => this.props.runSecondRandom()} 
                        style={{position: "absolute", visibility: this.props.status ? "visibility" : "hidden"}}>
                    TEST BUTTON 1
                </button>
            </div>
        )
    }
}

export default FirstRandom