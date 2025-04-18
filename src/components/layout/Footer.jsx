import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-features">
          <div className="feature">
            <div className="feature-icon pink">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V18" stroke="currentColor" strokeWidth="2" />
                <path d="M6 12H18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="feature-text">
              <h4>QUALITY</h4>
              <p>Premium brands</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 12V22H4V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 7H2V12H22V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M12 7H16.5C17.3284 7 18 6.32843 18 5.5C18 4.67157 17.3284 4 16.5 4C15.6716 4 15 4.67157 15 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7H7.5C6.67157 7 6 6.32843 6 5.5C6 4.67157 6.67157 4 7.5 4C8.32843 4 9 4.67157 9 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="feature-text">
              <h4>WORLDWIDE</h4>
              <p>Secure shipping</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="feature-text">
              <h4>SECURITY</h4>
              <p>Verified payment</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="social-link">
            <Facebook size={20} />
          </a>
          <a href="#" className="social-link">
            <Twitter size={20} />
          </a>
          <a href="#" className="social-link">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-link">
            <Youtube size={20} />
          </a>
          <a href="#" className="social-link">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Beauty Cosmetics. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
