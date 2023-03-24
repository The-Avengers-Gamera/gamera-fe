import { Link } from 'react-router-dom';
import styles from './css/footer.module.css';
import img from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column_logo}>
          <img
            className={styles.logo}
            src={img}
            alt="Gamera Logo"
            id="logo"
          />
          <p>A one-stop destination for gaming.</p>
        </div>
        <div className={styles.column_about}>
          <h3>ABOUT</h3>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/term">Term Of Use</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column_team}>
          <h3>OUR TEAM</h3>
          <ul>
            <li>
              <Link to="/our-team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <br />
      <p className={styles.copy}>&copy; The Avengers</p>
    </div>
  );
};

export default Footer;
