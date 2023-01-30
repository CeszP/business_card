import FacebookImg from '../images/facebook-icon.svg'
import InstagramImg from '../images/instagram-icon.svg'
import GitImg from '../images/github-icon.svg'

export default function Footer(){
    return(
        <footer className="footer--content">
            <a href="https://www.facebook.com/CezsiittaR/" target="_blank"><img className="footer--img" src={FacebookImg}></img></a>
            <a href="https://www.instagram.com/ceszpineda/" target="_blank"><img className="footer--img" src={InstagramImg}></img></a>
            <a href="https://github.com/CeszP" target="_blank"><img className="footer--img" src={GitImg}></img></a>
        </footer>
    )
}