import { ShoppingBag, User } from "lucide-react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="main-header">
        {/* Logo */}
        <div className="logo">
          <h1>
            MIT BEAUTY<span>•</span>
          </h1>
          <p className="tagline">MIT COSMETICS</p>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          #include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int getLPSLength(string &s) {
        int n = s.length();
        if (n == 0) return 0;
        
        vector<int> lps(n, 0);
        int len = 0; // length of the previous longest prefix suffix
        
        for (int i = 1; i < n; ) {
            if (s[i] == s[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        
        return lps.back();
    }
};<nav>
};<nav>
};<nav>
};<nav>
          <ul className="nav-links">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        
        {/* Header Actions */}
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
  );
};

export default Header;
