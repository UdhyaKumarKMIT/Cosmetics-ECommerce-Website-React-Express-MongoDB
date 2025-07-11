import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="row d-flex justify-content-between me-auto">
          <div className="col-md-6 col-sm-12 navLinks">
            <div className="navlinksBox">
              <h3>SHOP</h3>
              <ul>
                <li><a href="#">Shop </a></li>
                <li><a href="#">Best  </a></li>
                <li><a href="#">Natural  </a></li>
                <li><a href="#">MakeUp skincare product</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-md-6 col-sm-12 social-links">
            <a href="#" className="social-link"><Facebook size={20} /></a>
            <a href="#" className="social-link"><Twitter size={20} /></a>
            <a href="#" className="social-link"><Instagram size={20} /></a>
            <a href="#" className="social-link"><Youtube size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="text-center">© 2025 UdhyaKumarKMIT Final Year Student. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
