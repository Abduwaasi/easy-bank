import logo from "../images/footer-logo.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";
import Button from "./button";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-center">
        <div>
          <div className="img-container">
            <img src={logo} alt="easy bank " />
          </div>
          <span className="social-icons">
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </span>
        </div>
        <div className="social-link">
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="career">
          <a href="#">Career</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div>
          <Button></Button>
          <p className="copyright">&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
      <div class="attribution"> 
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Adebayo Abdulwaasi</a>.
      </div>
    </section>
  );
};

export default Footer;
