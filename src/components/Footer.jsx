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
              Crafted with {''}
              <span role="img" aria-label="sheep">
                ❤️ by
              </span>
              <span className="footer-text-name">Chaduvula Prasanth</span>
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Footer;
