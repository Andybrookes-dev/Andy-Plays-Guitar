

import { Link } from "react-router-dom";
import "./AmpNavbar.css";

export default function AmpNavbar() {
  return (
    <nav className="amp-navbar">
      <div className="faceplate-container">
        <img
          src="/assets/faceplate.png"
          alt="Amp Faceplate"
          className="faceplate"
        />

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
      </div>
    </nav>
  );
}
