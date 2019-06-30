import React, {Component} from 'react'
import '../css/FirstRandom.css'

class FirstRandom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="body">
                <button onClick={() => this.props.runSecondRandom()} style={{visibility: this.props.status ? "visibility" : "hidden"}}>TEST BUTTON 1</button>
            </div>
        )
    }
}

export default FirstRandom