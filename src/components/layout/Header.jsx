import { ShoppingBag, User, Search } from "lucide-react"
import "./Header.css"
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
     

      <div className="main-header">
        <div className="logo">
          <h1>
          MIT BEAUTY<span>•</span>
          </h1>
          <p className="tagline">MIT COSMETICS </p>
        </div>

        <nav className="main-nav">
          <ul>
          <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/shop">SHOP online now  </a>
            </li>
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            
            
        <li>
  <Link to="/signup">Sign Up Page</Link>
</li>

<li>
  <Link to="/login">Login Page </Link>
</li>

          </ul>
        </nav>
      
        
        <div className="header-actions">
          
          <button className="icon-button">
            <User size={20} />
          </button>
          <button className="icon-button">
            <ShoppingBag size={20} />
          </button>
          <button className="cta-button">SHOP NOW</button>
        </div>


      </div>
    </header>
  )
}

export default Header
