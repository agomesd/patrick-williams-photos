import Link from "next/link";
import { useRouter } from "next/router";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import styles from "../styles/GetInTouch.module.css";

const GetInTouch = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div
      className={currentPath === "/contact" ? styles.hide : styles.container}
    >
      <Link href="/contact">
        <a className={styles.link}>
          <MailOutlineIcon className={styles.icon} fontSize="large" />
        </a>
      </Link>
    </div>
  );
};

export default GetInTouch;
