import { useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";

import styles from "../styles/Avatar.module.css";

const Avatar = ({ url, size, alt, loading, uploading }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  };

  return (
    <div className={styles.container}>
      {loading ? (
        "Loading..."
      ) : uploading ? (
        "Uploading..."
      ) : (
        <img
          src={avatarUrl}
          className={styles.img}
          style={{ height: size, width: size }}
          alt={alt}
        />
      )}
    </div>
  );
};

export default Avatar;