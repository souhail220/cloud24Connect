// Footer.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/cloud24Logo-white.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="top">
          <div className="logo-section">
            <div className="logo-container">
              <img className="logo-icon" src={logo} alt="Cloud2Connect Logo"/>
              <div className="logo-text">
                <h2>Cloud24Connect</h2>
                <p>PERFORMANCE CLOUD</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M770.67-484.67q-3.34-119.66-86.5-202.83Q601-770.67 481.33-774v-66.67q73 1.34 137.17 29.84 64.17 28.5 112.33 76.66Q779-686 807.5-621.83q28.5 64.16 29.83 137.16h-66.66Zm-166 0q-3.34-50-38.34-84.66-35-34.67-85-38V-674q77.67 3.33 132.17 57.5 54.5 54.17 57.83 131.83h-66.66ZM796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" />
                </svg>
              </span>
              <p>Sales: +216 12 738 658</p>
            </div>
            <div className="contact-item">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM364-182l48-110q-42-15-72.5-46.5T292-412l-110 46q23 64 71 112t111 72Zm-72-366q17-42 47.5-73.5T412-668l-46-110q-64 24-112 72t-72 112l110 46Zm188 188q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm116 178q63-24 110.5-71.5T778-364l-110-48q-15 42-46 72.5T550-292l46 110Zm72-368 110-46q-24-63-71.5-110.5T596-778l-46 112q41 15 71 45.5t47 70.5Z" />
                </svg>
              </span>
              <p>24/7 Support: +216 13 738 657</p>
            </div>
          </div>
          <div className="menu">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Data Centers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Knowledgebase</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>

          <div className="menu">
            <h3>PRODUCTS</h3>
            <ul>
              <li>
                <a href="#">Cloud Servers</a>
              </li>
              <li>
                <a href="#">Cloud Desktop</a>
              </li>
              <li>
                <a href="#">Virtual Private Cloud</a>
              </li>
              <li>
                <a href="#">Cloud Firewall</a>
              </li>
              <li>
                <a href="#">Load Balancers</a>
              </li>
              <li>
                <a href="#">Block Storage</a>
              </li>
              <li>
                <a href="#">Reseller Hosting</a>
              </li>
              <li>
                <a href="#">Cloud VPS</a>
              </li>
              <li>
                <a href="#">Windows VPS</a>
              </li>
            </ul>
          </div>

          <div className="menu">
            <h3>SOLUTIONS</h3>
            <ul>
              <li>
                <a href="#">Managed Cloud Services</a>
              </li>
              <li>
                <a href="#">Disaster Recovery</a>
              </li>
              <li>
                <a href="#">Startups</a>
              </li>
              <li>
                <a href="#">SMB</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Web Developers</a>
              </li>
              <li>
                <a href="#">App Developers</a>
              </li>
              <li>
                <a href="#">E-Commerce</a>
              </li>
              <li>
                <a href="#">SaaS Providers</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="separator" />
        <div className="privacy">
          <span>© 2025 Cloud2Connect, Inc., All rights reserved</span>
          <div className="privacy-links">
            <a href="#" className="privacy-link">
              Privacy policy
            </a>
            <a href="#" className="privacy-link">
              Terms of use
            </a>
            <a href="#" className="privacy-link">
              Report security issues
            </a>
            <a href="#" className="privacy-link">
              Trademark
            </a>
          </div>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
