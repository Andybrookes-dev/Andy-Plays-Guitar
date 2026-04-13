import { useState } from "react";
import { Link } from "react-router-dom";
import "./AmpNavbar.css";
import { useNavigate } from "react-router-dom";


export default function AmpNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleAuthSwitch = () => {
  if (isLoggedIn) {
    // LOG OUT
    setIsLoggedIn(false);
    // clear tokens later
    navigate("/");
  } else {
    // GO TO LOGIN PAGE
    navigate("/login");
  }
};


  return (
    <nav className="amp-navbar">
      <div className="faceplate-container">
        <img
          src="/assets/faceplate.png"
          alt="Amp Faceplate"
          className="faceplate"
        />

        {/* KNOBS */}
        <div className="controls">
          <div className="knob-wrapper">
            <img src="/assets/number-ring.png" className="number-ring" />
            <Link to="/tabs" className="knob">
              <img src="/assets/knob.png" />
            </Link>
            <div className="label">TABS</div>
          </div>

          <div className="knob-wrapper">
            <img src="/assets/number-ring.png" className="number-ring" />
            <Link to="/videos" className="knob">
              <img src="/assets/knob.png" />
            </Link>
            <div className="label">VIDEOS</div>
          </div>

          <div className="knob-wrapper">
            <img src="/assets/number-ring.png" className="number-ring" />
            <Link to="/blog" className="knob">
              <img src="/assets/knob.png" />
            </Link>
            <div className="label">BLOG</div>
          </div>

          <div className="knob-wrapper">
            <img src="/assets/number-ring.png" className="number-ring" />
            <Link to="/shop" className="knob">
              <img src="/assets/knob.png" />
            </Link>
            <div className="label">SHOP</div>
          </div>
        </div>

        {/* LOGIN ROCKER SWITCH */}
        <div className="login-switch-area">
          <div className="rocker-wrapper" onClick={handleAuthSwitch}>

            <div className={`rocker-switch ${isLoggedIn ? "on" : "off"}`}>
              <div className="switch-handle"></div>
            </div>
            <div
              className={`switch-led ${isLoggedIn ? "led-on" : "led-off"}`}
            ></div>
          </div>

          <div className="login-label">
            {isLoggedIn ? "LOGOUT" : "LOGIN"}
          </div>

          {!isLoggedIn && (
            <Link to="/register" className="login-register-link">
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
