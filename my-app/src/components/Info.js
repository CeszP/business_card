import EmailImg from "../images/email-icon.png"
import LinkedinImg from "../images/linkedin-icon.png"

export default function Info(){
    return(
        <div className="info--inner-container">
            <h1 className="info--title">César Peñaloza</h1>
            <label className="info--subtitle1">Frontend Developer</label>
            <label className="info--subtitle2">cesarpp.website</label>
            <div className="info--btns-container">
                <a href="mailto:penalozacesz@gmail.com" target="_blank">
                    <button className="info--btns-email">
                        <img className="btn--email-icon" src={EmailImg}></img> Email
                    </button>
                </a>                    
                <a href="" target="_blank">
                    <button className="info--btns-linkedin">
                        <img className="btn--linkedin-icon" src={LinkedinImg}></img> LinkedIn
                    </button>
                </a>
            </div>
        </div>    
    )
}