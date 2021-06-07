import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div>
        <p>© 2021 all rights reserved</p>
        <a
          className={styles.link}
          href="https://murmuring-peak-27984.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Gomie Web Designs
        </a>
      </div>
      <p className={styles.top} onClick={handleScrollToTop}>
        Back to Top
      </p>
      <div className={styles.iconBox}>
        <a
          href="https://www.instagram.com/patrickwilliamsphotos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com/patrick.p.williams.37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" className={styles.icon} />
        </a>
        <MailOutlineIcon fontSize="large" className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
