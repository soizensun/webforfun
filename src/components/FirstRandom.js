import React, {Component} from 'react'
import '../css/FirstRandom.css'

class FirstRandom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container" style={{visibility: this.props.status ? "visibility" : "hidden", margin: "auto"}}>
                {/* <button  onClick={() => this.props.runSecondRandom()} >
                    TEST BUTTON 1
                </button> */}

                <div id="wrapper" className="container" style={{visibility: this.props.status ? "visibility" : "hidden", margin: "auto"}}>
                    <a onClick={() => this.props.runSecondRandom()} class="my-super-cool-btn">
                        <span>Go!</span>
                    </a>
                </div>


            </div>
        )
    }
}

export default FirstRandom