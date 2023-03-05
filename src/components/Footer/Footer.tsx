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
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a
                href="/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/term"
                target="_blank"
                rel="noreferrer"
              >
                Term Of Use
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column_team}>
          <h3>OUR TEAM</h3>
          <ul>
            <li>
              <a href="/our-team">Our Team</a>
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
