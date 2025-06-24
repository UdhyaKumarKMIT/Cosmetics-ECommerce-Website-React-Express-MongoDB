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
          <p className="tagline"> COSMETICS </p>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="/shop">SHOP  </a>
            </li>
            <li>
              <a href="/bestsellers">BEST Cool  Products</a>
            </li>
            <li>
              <a href="/skincare">SKINCARE and Medicare Products </a>
            </li>
            <li>
              <a href="/makeup">MAKEUP  </a>
            </li>
           
            <li>
  <Link to="/signup">Sign up </Link>
</li>

<li>
  <Link to="/login">Login </Link>
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
