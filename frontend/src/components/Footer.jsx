import "./Footer.css";

export default function Footer() {
  return (
    <footer className="fretboard-footer">
      <div className="fretboard-wood">

        {/* Frets */}
        <div className="frets">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="fret"></div>
          ))}
        </div>

        {/* Inlays */}
        <div className="inlays">
  <div className="inlay fr-3"></div>
  <div className="inlay fr-5"></div>
  <div className="inlay fr-7"></div>
  <div className="inlay fr-9"></div>
  <div className="inlay double fr-12"></div>
</div>

        {/* Strings */}
<div className="strings">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="string"></div>
  ))}
</div>



        {/* Footer content */}
        <div className="footer-inner">

          <div className="social-links">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/andymusicproducer"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@andymusicproducer"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.75 2h3.25a5.75 5.75 0 005.75 5.75v3.25a9 9 0 01-5.75-1.99v7.24A6.75 6.75 0 119.25 9.5h3.25a3.5 3.5 0 103.5 3.5V2z"/>
              </svg>
            </a>

          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Andy Plays Guitar
          </p>

        </div>
      </div>
    </footer>
  );
}
