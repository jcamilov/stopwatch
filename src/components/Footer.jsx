import React from "react";

function Footer() {
  return (
    <footer className="p-10 footer bg-neutral text-neutral-content absolute bottom-0">
      <div>
        <span className="footer-title">Stopwatch</span>
        <a
          href="https://www.linkedin.com/in/jcamilovargas/"
          className="link link-hover"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="mailto:vargasjcamilo@gmail.com"
          className="link link-hover"
          target="_blank"
        >
          E-mail
        </a>
        <a
          href="https://github.com/jcamilov"
          className="link link-hover"
          target="_blank"
        >
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
