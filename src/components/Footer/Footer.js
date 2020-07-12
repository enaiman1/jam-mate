import React from "react";
import "./Footer.scss";
import resume from "../../assets/ENResume20.pdf";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
      <a
          href="https://github.com/enaiman1"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icons__links"
        >
          <i className="fab fa-github fa-4x"></i>
        </a>
      <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icons__links"
        >
          <i className="far fa-file-pdf fa-4x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/enaiman1"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icons__links"
        >
          <i className="fab fa-linkedin fa-4x"></i>
        </a>

        

        <a
          href="https://www.instagram.com/ericcentrik/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icons__links"
        >
          <i className="fab fa-instagram fa-4x"></i>
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;
