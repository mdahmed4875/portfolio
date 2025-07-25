import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Mohammed Ahmed Pasha. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/mdahmed4875" target="_blank">GitHub</a>
        <a href="https://leetcode.com/u/mdahmed_03/" target="_blank">Leetcode</a>
        <a href="https://www.linkedin.com/in/mohammed-ahmed-pasha-980a78291" target="_blank">LinkedIn</a>
        <a href="mailto:aahmed4875@gmail.com">Email</a>
      </div>
      <button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ Top</button>
    </footer>
  );
}

export default Footer
