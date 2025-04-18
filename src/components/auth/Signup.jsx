"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Check } from "lucide-react"
import "./Signup.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    email: "",
    day: "",
    month: "",
    year: "",
    gender: "male",
    mobile: "",
    otp: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [otpValid, setOtpValid] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Validate email with a simple regex
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setEmailValid(emailRegex.test(value))
    }

    // Validate OTP (simple 6-digit check)
    if (name === "otp") {
      setOtpValid(value.length === 6 && /^\d+$/.test(value))
    }
  }

  const handleSendOtp = () => {
    // In a real app, this would send an OTP to the user's phone
    setOtpSent(true)
    alert("OTP sent to your mobile number!")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log(formData)
  }

  // Generate options for day, month, year dropdowns
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

  return (
    <div className="auth-container">
      <div className="auth-form-container signup-form-container">
        <h1 className="auth-title">New user?</h1>
        <p className="auth-subtitle">Use the form below to create your account.</p>

        <form className="auth-form signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-input"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                className="form-input"
                placeholder="e.g., Indian"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="validated-input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {emailValid && (
                  <span className="validation-icon">
                    <Check size={18} color="green" />
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group date-group">
              <label>Date of Birth</label>
              <div className="date-inputs">
                <select name="day" className="form-select" value={formData.day} onChange={handleChange} required>
                  <option value="" disabled>
                    Day
                  </option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>

                <select name="month" className="form-select" value={formData.month} onChange={handleChange} required>
                  <option value="" disabled>
                    Month
                  </option>
                  {months.map((month, index) => (
                    <option key={month} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>

                <select name="year" className="form-select" value={formData.year} onChange={handleChange} required>
                  <option value="" disabled>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="form-input"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <div className="otp-container">
                <div className="validated-input">
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    className="form-input"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    disabled={!otpSent}
                  />
                  {otpValid && (
                    <span className="validation-icon">
                      <Check size={18} color="green" />
                    </span>
                  )}
                </div>
                <button type="button" className="otp-button" onClick={handleSendOtp}>
                  Send OTP
                </button>
              </div>
              {otpSent && <p className="otp-hint">*Enter the OTP received on your phone</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="terms-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-redirect">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>

      <div className="auth-image">
        <div className="auth-image-overlay">
          <div className="auth-image-content">
            <h2>Join our beauty community</h2>
            <p>Create an account to access exclusive offers and personalized recommendations</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
