import React from "react";
import Link from "next/link";
import useHooks from "../hooks/useHooks";
import ProfileCard from "./ProfileCard";
import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  const { session } = useHooks();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>
            <Link href="/">
              <a>Patrick | Williams</a>
            </Link>
          </h1>
        </div>

        <ul className={styles.links}>
          <Link href="/about">
            <li className={styles.link}>
              <a>about</a>
            </li>
          </Link>

          <Link href="/blogs">
            <li className={styles.link}>
              <a>blogs</a>
            </li>
          </Link>

          <Link href="/portfolio">
            <li className={styles.link}>
              <a>portfolio</a>
            </li>
          </Link>

          {session ? (
            <li className={styles.profileCard}>
              <ProfileCard />
            </li>
          ) : (
            <Link href="/auth">
              <li className={`${styles.link} ${styles.signin}`}>
                <a>sign in</a>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
