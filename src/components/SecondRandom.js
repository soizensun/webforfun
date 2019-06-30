import React, {Component} from 'react'
import { FacebookShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/SecondRandom.css'

class SecondRandom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: [
                "https://live.staticflickr.com/4272/34945063085_e0489ff90c_b.jpg",
                "https://live.staticflickr.com/4225/34557709780_17a2de1785_b.jpg",
                "https://live.staticflickr.com/4200/34102141924_ab4fe1642c_k.jpg",
                "https://live.staticflickr.com/4252/34557704720_6d3d15777f_k.jpg"
            ]
        }
    }

    randomSrc = ()  => {
        console.log(Math.floor(Math.random() * this.state.src.length));
    }

    render() {
        // console.log(Image1)
        return (
            <div  style={{
                visibility: this.props.status ? "visible" : "hidden", 
                display: "block", textAlign: "center", marginTop: "30px"
            }}>
                <div>
                    <img src = "https://live.staticflickr.com/4272/34945063085_e0489ff90c_b.jpg" />
                </div>
                <div>
                    <button onClick={ this.randomSrc() }>
                        TEST BUTTON 2
                    </button>
                    
                    <FacebookShareButton url={this.state.src[2]} className="button is-outlined is-rounded facebook" >
                        {/* <span className="icon">
                            <i class="fab fa-facebook-square"></i>
                        </span> */}
                        <button>
                        Facebook
                        </button>
                    </FacebookShareButton>
                   

                </div>
            </div>
        )
    }
}

export default SecondRandom