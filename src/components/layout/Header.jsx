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
              <a href="/bestsellers">BESTs</a>
            </li> <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/bestsellers">BESTs</a>
            </li> <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/bestsellers">BESTs</a>
            </li> <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/bestsellers">BESTs</a>
            </li> <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/bestsellers">BESTs</a>
            </li> <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/bestsellers">BESTs</a>
            </li> <li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/bestsellers">BESTs</a>
            </li> <li>
              <a href="/bestsellers">BESTs</a>
            </li>
           
            
            <li>
              <a href="/bestsellers">BESTs</a>
            </li><li>
              <a href="/bestsellers">BESTs</a>
            </li>
            <li>
              <a href="/bestsellers">BESTs</a>
            </li>
         
              <a href="/skincare">SKINCARE and natural products</a>
            </li> <li>
              <a href="/skincare">SKINCARE and natural products</a>
            </li> <li>
              <a href="/skincare">SKINCARE and natural products</a>
            </li> <li>
              <a href="/skincare">SKINCARE and natural products</a>
          
              <a href="/skincare">SKINCARE and natural products</a>
            </li>
            <li>
              <a href="/makeup">MAKEUP Products  </a>
            </li> <li>
              <a href="/makeup">MAKEUP Products  </a>
            </li> <li>
              <a href="/makeup">MAKEUP Products  </a>
            </li>  int n=nums.size();

if(n==1) return 0;

if(nums[0]>nums[1])
    return 0;


if(nums[n-1]>nums[n-2])
    return n-1;

int low=1,high=n-2;

while(low<=high)
{
    int mid=low+(high-low)/2;

    if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1])
        return mid;


    if(nums[mid]>nums[mid-1])
        low=mid+1;
    else
        high=mid-1;
}
return -1; int n=nums.size();

if(n==1) return 0;

if(nums[0]>nums[1])
    return 0;


if(nums[n-1]>nums[n-2])
    return n-1;

int low=1,high=n-2;

while(low<=high)
{
    int mid=low+(high-low)/2;

    if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1])
        return mid;


    if(nums[mid]>nums[mid-1])
        low=mid+1;
    else
        high=mid-1;
}
return -1; int n=nums.size();

if(n==1) return 0;

if(nums[0]>nums[1])
    return 0;


if(nums[n-1]>nums[n-2])
    return n-1;

int low=1,high=n-2;

while(low<=high)
{
    int mid=low+(high-low)/2;

    if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1])
        return mid;


    if(nums[mid]>nums[mid-1])
        low=mid+1;
    else
        high=mid-1;
}
return -1; int n=nums.size();

if(n==1) return 0;

if(nums[0]>nums[1])
    return 0;


if(nums[n-1]>nums[n-2])
    return n-1;

int low=1,high=n-2;

while(low<=high)
{
    int mid=low+(high-low)/2;

    if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1])
        return mid;


    if(nums[mid]>nums[mid-1])
        low=mid+1;
    else
        high=mid-1;
}
return -1; int n=nums.size();

if(n==1) return 0;

if(nums[0]>nums[1])
    return 0;


if(nums[n-1]>nums[n-2])
    return n-1;

int low=1,high=n-2;

while(low<=high)
{
    int mid=low+(high-low)/2;

    if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1])
        return mid;


    if(nums[mid]>nums[mid-1])
        low=mid+1;
    else
        high=mid-1;
}
return -1; int n=nums.size();

if(n==1) return 0;

if(nums[0]>nums[1])
    return 0;


if(nums[n-1]>nums[n-2])
    return n-1;

int low=1,high=n-2;

while(low<=high)
{
    int mid=low+(high-low)/2;

    if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1])
        return mid;


    if(nums[mid]>nums[mid-1])
        low=mid+1;
    else
        high=mid-1;
}
return -1;
           
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
