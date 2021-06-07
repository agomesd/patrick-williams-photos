import styles from "../styles/Success.module.css";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>Email Successfully Sent!</h1>
      <p className={styles.link} onClick={() => router.push("/")}>return to homepage</p>
    </div>
  );
};

export default Success;
