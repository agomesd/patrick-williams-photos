import styles from "../styles/Home.module.css";
import Link from 'next/link';

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.backImage}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Patrick Williams Photography</h2>
          <p className={styles.description}>
            Bacon ipsum dolor amet turducken corned beef cupim, boudin
            prosciutto spare ribs pork andouille landjaeger ribeye. 
          </p>
          <Link href='/about'>
            <a className={styles.quickLink}>About</a>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
