import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import randomColorGenerator from "../utils/randomColorGenerator";
import useHooks from "../hooks/useHooks";

import styles from "../styles/ProfileCard.module.css";

const ProfileCard = () => {
  const { signOut, session } = useHooks();
  const router = useRouter();
  const [randomColor, setRandomColor] = useState("#ffffff");

  useEffect(() => {
    const randomColor = randomColorGenerator();
    setRandomColor(randomColor);
  }, []);

  const handleSignOut = () => {
    const { access_token } = session;
    signOut(access_token);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Avatar
        className={styles.avatar}
        variant="rounded"
        style={{ backgroundColor: randomColor }}
        src={session?.user.avatar_url}
      >
        <Link href={`/user-profile/${session?.user.id}`}>
          <a>{session?.user.email[0].toUpperCase()}</a>
        </Link>
      </Avatar>
      <div className={styles.signout} onClick={handleSignOut}>
        <p>sign out</p>
      </div>
    </div>
  );
};

export default ProfileCard;
