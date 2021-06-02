import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import useHooks from "../hooks/useHooks";
import ProfileCard from "./ProfileCard";

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
          <li className={styles.link}>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>

          <li className={styles.link}>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>

          <li className={styles.link}>
            <Link href="/portfolio">
              <a>portfolio</a>
            </Link>
          </li>

          {session ? (
            <li className={styles.profileCard}>
              <ProfileCard />
            </li>
          ) : (
            <li className={`${styles.link} ${styles.signin}`}>
              <Link href="/auth">
                <a>sign in</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
