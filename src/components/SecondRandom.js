import React, {Component} from 'react'
import { FacebookShareButton } from 'react-share';
import '../css/SecondRandom.css'


class SecondRandom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: [
                "https://lh3.googleusercontent.com/zM0elIJdlqIBL95i_NdC7i79zFa8J14Bw5D8H1x9y9scxaESFDGmdEmKj532MAXm6XzbtWJBZigf-X0HXVQ-fP_TgdvbtLrB1kTlx9Q9-DHWBpbxQGDZnb-rgp5EXQxAJjam6410U9VCTwGspIQHBGkQYA4eQfOUcSCEYZEc7jTR8Sr8oQD8N5GL9lUzxyWSVbvNp2lVTyegY8ePNR7sHRyINv-UNPDleb3WGynIl_RSv-QmB9WTf09hcCv7wamlTkvkI3BKfGLtDpAdcGunuhVNPfwZnVZpHukG684OgtIeRVHZxTFKkRaU_bk5xMJAgT2BFDyoo1BSuR1f1DUXdKZca9ovnMlv7gOPhcxTZ10m1b1G2bdPEWQbpJ07_k23QA9ty9yuM2w7r5k_C5PbMO9GC4RUEG7npmSZxt5Q8Nmbmfl-dPtPbLKgB9fa3Q2wAMdgOSIlao7XeeVTHBXAY2_XJlVCA9uRaybymW8O5GhCtsJbzQnc8zKmTFBS6Tdw_qBb6KidgBRtqC3UWoE6kmMMrdfnNFVvE82Gb-dR3twkOixqYryOnH74jSPMbBBNj-IliNqXGrZEGd1E83u-5F9wnafGpvpsCh7YbjGYbYTLdmV6pkTUh9VpzIs9uS_6_tOnT6-I6DIkrnjX7WEpPEZ94rF_-Q=w380-h470-no",
                "https://lh3.googleusercontent.com/J4WQfKfgnLtO4wcbwldFZW4-92TTuMhJKwE9iqNAdad13SqOXEUiR-Zf5eMPcEi5-boAw0b7EwDfcI4YeM4l_UG_jd_DVs-coHpkhKgc7UxHc7T5MbRl0PoHBE85BKZeRrIMJkN9OSSv2blE_bcOja5VFRC3Y3cGB7uU_Y6xlEdxktd7_gCHPCg-WizZr3pdSeanuSfoSH4tbt-6EXGds6iWtccZVsfKp1DmHzUKm9yK3pGNMBqD_pumXjcn_sAlBI3Kswn-703P-1LA0q0axqfI9qVspt9JWcPeX0kNXQs9pOHaiS8SIFM-uV_GeRC5WzLy4Thpg6TlvG-caPJLtPiKcl002U33VNYuaU62v3FQosAmmO8BEOvOiNLTHLfFJwxb-KS82vFWA9o7251VgBT-RLHaf6YVUnG30zASkNtzOYefFPUzFwue682kr5WMbtlpYi70Na4Sjqw3XJxUn5H59XlhSJVddZ91T7ycj2Eprxz0cst5COpEVZHu0ABBJNEgKHrz9NZbjFc-QgaF6pMOmyJSIltiygR3SpJewkPOY8Oo_XOChChXFkOlWQyoRvBhxq5cEfoneEuebC_6PLZasjwtSm5lbdpiGiDmegkMnmg0MqYKYWnkJeuT_XdPdbCUwAvkllXrjK7wSjW81ccGfC3wvg=w380-h470-no",
                "https://lh3.googleusercontent.com/jMohCbFE-IRAevwSpqgs11gkWsZ_BMX8kLMvlJB83TEUwXWCEQQDmeO28e14dCHlFpzIHxLYMzFp4nqKMrcAOGGRvrzlYHgmgBjGiUbyM0UQq6Cgd25OFkoK7yYvduhHGZkFsNg4ix88m6KGQAD1uq_ohWn5sDuCHjhLg5vpC2UW33Ffz-IiUJNwZ82zbdlu_W5RUjwWTKXYPCDIR_G1Xg9WxzjMeGz0xwZKN6i0VQOVb1UNbNHPBYXgzIA9aKQ4ZCxbu1QO-Cp9wEnCLEMw0TwmEXfMut1Vk5nJpU9mgOq0bIFFvwLx7yZYMSsfeGTgj_SEUF7mi3qLy2hGepy3G7yizYanaQn8b7XLJBROIs2-nFv2G3txkM7uM-UD7yHcep63BayjMKhrQLk0qMyTXhnudTOnf61SVahd2FBjLKw3ji51yFcgnHBzRfyNgf6n__dRTOCJHF_V-Y01OwzWwfrwwWAusRQ61X39SD2jZeXLyU2yaDuANFcVN6fwEG0K2OFZXJZIrr8aEu1YB4PSkQZHyMVyxWRESXyBy0gl0jR1m-GV3msvtHZ32GYFUG1kmdGRg_KpZ_D4TcZHcFFQGMyjyo3tPzIezOtijuCGM57iBjVCZI6O5c8GZ1AVeg0DQfwORxfeuXqcPvR6Xf8X12rl5ZGqbg=w380-h470-no",
                "https://lh3.googleusercontent.com/LB0qhr7ta0HTUmVIWdnSO-xzxWLik-3PiXgjjndN_RbNfmil6l87sP8oIheAQjjgS1rT_eCQ5qL32ItPLXmD0-5XaowtjfYd8KRIIWjiWfSzzzLKgLm6yCMjlAdfuQnpLZFDeFDVtbpR5uQZfLFi7pSl0aYDJecXjULG7Nk_TtHRVUYXTfQCB-OQFTmC_kRbgP1XEw-oP8txtIoFwcPU7zAnAL3umRu3m64kgoxz55purw2r0gbvenEuslMJfaew0dkqiBijdiD948O1-QC21m4KBZcyvxureK5MEcNJoTgjaPMEnJ5U7ZNZAHFLK3stHl2gaznmYLTcm1tAHHtYRvQzfet-Y0JA11Fx9jAJyLTBkaXYuFStRzD3tsdQMoKCvnQgKYeqF4gvP35usLoWU4QNlKlmYQhRXjIyd682zu_omBWsDReJi_qZQz2eefu_t7ueJaQQhO1s_zd6ynZuOwBon-yDVTRBDg4RvQonfWRd3RAPiJo_hcnjYRQcRk8wrnYJpQas1vD_SAXeasqzuTYiy-6MDG2ESFngJYs9C626L6uHVb_mF5kAuTwafwS1_QXTjFpoEZnTpm6MmhcGWhm8ZUW27Uhs2Yo1YOMgmTH0Ws3AEOeEo1PsIZjMn6hWZ23_-MfShvZr-Xk0N3Z4WbzIPIbrhw=w380-h470-no",
                "https://lh3.googleusercontent.com/WXULbEKvBCkxFjcOhSKaAWWJiTGGYuXYyeVR_J4wYFUKBLbBWcoZKn6Ea9BkFfxxh9_AREwn8irCV_4Lf1ZJUwK8Q3VMharUWMF7nlZ4okU-UMjHSk2ark_vDxqFvtzRFBGlfRpd95S26co74eVo5IgOcEfsP_RHJMwPuIgBR7uZceiU9ItVeldhVg9Nr1HDSBKIwLOTyoxL0A57xx2W8sCqqHc9y997v5_pVyLrJfcaA94LnBIRfzbgEarKHzjfJrVKRWSYdm64tbVE47x-rWzGK1uuK6AtrGVRhZHhfBToF7aEBwx4nyNS0SSV1d__LtXs2oZHSb3NguaCMaCyaPcuZbDwBnwbAGlarbx3Z3vB2XqIC-Cc1LefoKV3bWTyC7c1C3PU4Kpgf7jkjkVayqLvNpOkkMG5z1lxzEf_SNWLjSsiNIkyCMrypJDmKtJklfCfjId94fh08Ctb5ag2PmWE27eykHn6Gmw3C5fAPG6aTcGjY476RsWIjL2dobbEAUt4fXrpNvd86F5YPStAKHEaGo2VlWyyucwjhM6luDvI85xHdviKYSKgI2LSfyCO0a_1jwbhZEFN9dSHLNVz8Re5UMbNB9mfvxZ4fVi_4ViuPABkFUc86nimcglUTXJcL24XUSR7Wp2_Sy_Y9_R_EgXkFLGYPA=w380-h470-no",
                "https://lh3.googleusercontent.com/WXULbEKvBCkxFjcOhSKaAWWJiTGGYuXYyeVR_J4wYFUKBLbBWcoZKn6Ea9BkFfxxh9_AREwn8irCV_4Lf1ZJUwK8Q3VMharUWMF7nlZ4okU-UMjHSk2ark_vDxqFvtzRFBGlfRpd95S26co74eVo5IgOcEfsP_RHJMwPuIgBR7uZceiU9ItVeldhVg9Nr1HDSBKIwLOTyoxL0A57xx2W8sCqqHc9y997v5_pVyLrJfcaA94LnBIRfzbgEarKHzjfJrVKRWSYdm64tbVE47x-rWzGK1uuK6AtrGVRhZHhfBToF7aEBwx4nyNS0SSV1d__LtXs2oZHSb3NguaCMaCyaPcuZbDwBnwbAGlarbx3Z3vB2XqIC-Cc1LefoKV3bWTyC7c1C3PU4Kpgf7jkjkVayqLvNpOkkMG5z1lxzEf_SNWLjSsiNIkyCMrypJDmKtJklfCfjId94fh08Ctb5ag2PmWE27eykHn6Gmw3C5fAPG6aTcGjY476RsWIjL2dobbEAUt4fXrpNvd86F5YPStAKHEaGo2VlWyyucwjhM6luDvI85xHdviKYSKgI2LSfyCO0a_1jwbhZEFN9dSHLNVz8Re5UMbNB9mfvxZ4fVi_4ViuPABkFUc86nimcglUTXJcL24XUSR7Wp2_Sy_Y9_R_EgXkFLGYPA=w380-h470-no",
                "https://lh3.googleusercontent.com/DkKWsCLKcbwlNyCkFuNP6nonbjKnx6PcFA_Mdr7BAG_AQdWZMMDADuustCJojcE6HS0_vsUd8phhkJSuFjGBI5g-Nf39D2u_Eyj654d9ZEF7enFJ33x7Ul9fSjgtiCZlwyJ7tQpLEjFz0-cVjPYeSfxwkpKFIr6yexcndLEhoSHS5k_vim0-gMMLv5079oBhlEtcTA84bbB-wKbaowl6QKs61EeyA97EwkmdoZ8OCP7r4VBhJjLynEbqBb0dgFIFWJCbqYntntpNstgkeP1EbkPuKEDtwXJoB9JUyY9Hi1sDDSEjMAhqex0wOB2ylnDpt11A6adovl3HLOtXxr775JKhtHs3GCg7TXfRjfkaHYcGNcTg0i5-jWE2Vge8g4-3kJpDi5ZVILogeOhjAqxGjexlBviZKljr8uxkE5ALAvCCjL-VSfA2hcbQKTduu6hO3ZdVT85ioS7_RTghhve8thA8Ol2h8FxrpPyzYlHgwq7O6wRceKzWnc1M11JCpH_sKkgQF1Qfvn1rVd0nQCwUp__7JcxSTvZi2JE10A4DHJJ82xF-nW6tpfK2jFWnzl4D7Z2l0cDiYjUpFPmum0ZSwFN8Fe-oU-8c-PQgFSkU45mVfNF8MXHM5YX0yfvsbH32UuwF82i9L88uLbtBN2ASZrmv3qs3KA=w380-h470-no",
            ],
            notes: "https://lh3.googleusercontent.com/DkKWsCLKcbwlNyCkFuNP6nonbjKnx6PcFA_Mdr7BAG_AQdWZMMDADuustCJojcE6HS0_vsUd8phhkJSuFjGBI5g-Nf39D2u_Eyj654d9ZEF7enFJ33x7Ul9fSjgtiCZlwyJ7tQpLEjFz0-cVjPYeSfxwkpKFIr6yexcndLEhoSHS5k_vim0-gMMLv5079oBhlEtcTA84bbB-wKbaowl6QKs61EeyA97EwkmdoZ8OCP7r4VBhJjLynEbqBb0dgFIFWJCbqYntntpNstgkeP1EbkPuKEDtwXJoB9JUyY9Hi1sDDSEjMAhqex0wOB2ylnDpt11A6adovl3HLOtXxr775JKhtHs3GCg7TXfRjfkaHYcGNcTg0i5-jWE2Vge8g4-3kJpDi5ZVILogeOhjAqxGjexlBviZKljr8uxkE5ALAvCCjL-VSfA2hcbQKTduu6hO3ZdVT85ioS7_RTghhve8thA8Ol2h8FxrpPyzYlHgwq7O6wRceKzWnc1M11JCpH_sKkgQF1Qfvn1rVd0nQCwUp__7JcxSTvZi2JE10A4DHJJ82xF-nW6tpfK2jFWnzl4D7Z2l0cDiYjUpFPmum0ZSwFN8Fe-oU-8c-PQgFSkU45mVfNF8MXHM5YX0yfvsbH32UuwF82i9L88uLbtBN2ASZrmv3qs3KA=w380-h470-no",

        }
    }

    handleClick = () => {
        setTimeout (  this.setState({
            notes: this.state.src[Math.floor(Math.random() *  this.state.src.length)]
        }) ,1000)
      }

    render() {
        // console.log(Image1)
        return (
            <div  style={{
                visibility: this.props.status ? "visible" : "hidden", 
                display: "block", textAlign: "center", marginTop: "30px"
            }}>
                <div>
                    <img src = {this.state.notes} />
                </div>

                <div>
                    <button className="norButton" onClick={this.handleClick}>Random Note</button>
                    
                    <FacebookShareButton url={this.state.notes} className="button is-outlined is-rounded facebook" >
                        <button className="faceButton">
                        Facebook
                        </button>
                    </FacebookShareButton>
                   

                </div>
            </div>
        )
    }
}

export default SecondRandom