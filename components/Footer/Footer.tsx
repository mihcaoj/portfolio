import githubSvg from '../../src/assets/images/github.svg';
import linkedinSvg from '../../src/assets/images/linkedin.svg';

function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <div className="row">
        <ul className="footer__social-links">
          <li className="footer__social-link-item">
            <a href="https://github.com/mihcaoj" title="GitHub Profile" target="_blank" rel="noopener noreferrer">
              <img src={githubSvg} className="footer__social-image" alt="Github" />
            </a>
          </li>
          <li className="footer__social-link-item">
            <a href="https://linkedin.com/in/joachimbono" title="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
              <img src={linkedinSvg} className="footer__social-image" alt="Linkedin" />
            </a>
          </li>
        </ul>
        <p className="foot">&copy; 2025 mihcaoj</p>
      </div>
    </footer>
  );
}

export default Footer;
