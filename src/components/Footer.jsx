import React from 'react';

function Footer() {
  return (
    <section>
      <div className="wrapper">
        <div className="footer-position">
          <footer>
            <a
              title="chaduvula prasanth"
              href="https://twitter.com/chaduvula98"
              target="_blank"
              className="footer-link"
              rel="noopener noreferrer"
            >
              Developed By
              <span className="footer-text-name">Chaduvula Prasanth</span>
            </a>
            <a
              className="footer-link"
              href="https://altcampus.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with
              <span role="img" aria-label="sheep">
                ❤️
              </span>
              in
              <span className="footer-text-name">Altcampus</span>
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Footer;
