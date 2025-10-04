import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import "./App.css"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
function App() {
  return (
    
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div><div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
      <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
   
  )
}

export default App
