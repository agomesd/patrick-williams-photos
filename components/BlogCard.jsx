import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../utils/initSupabase";
import useHooks from "../hooks/useHooks";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

import styles from "../styles/components/BlogCard.module.css";

const BlogCard = ({ data, error }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const { currentProfile } = useHooks();

  const handleOpenBlog = () => {
    router.push(`/blogs/${data?.id}`);
  };

  const handleToggleFavorite = () => {
    console.log(currentProfile?.favorite_blogs);
  };

  const updateProfileFavorites = async (newArray) => {
    let { data, error } = await supabase
      .from("profiles")
      .update({ favorite_blogs: newArray })
      .eq("id", currentProfile?.id);
    if (error) console.log(error.message);
    console.log(data);
  };

  const updateCount = async (newCount) => {
    let { data, error } = await supabase
      .from("blogs")
      .update({ liked_count: newCount })
      .eq("id", data?.id);
    if (error) console.log(error.message);
    console.log(data);
  };

  const getFavorite = async () => {
    let blogId = await currentProfile?.favorite_blogs.filter((id) => {
      return id === data?.id;
    });

    if (blogId?.length > 0) setIsFavorite(true);
  };

  useEffect(() => {
    if (error) console.log(error.message)
    getFavorite();
  }, []);

  return (
    <div>
      {!data ? (
        <p className={styles.loading}>...loading</p>
      ) : (
        <div className={styles.container}>
          <div onClick={handleOpenBlog} className={styles.image}>
            <img src={data?.image_url} alt={data?.title} />
          </div>
          <h1 onClick={handleOpenBlog} className={styles.title}>
            {data?.title}
          </h1>
          <p className={styles.date}>{data?.created_at}</p>
          <p className={styles.description}>{data?.description}</p>
          <Link href={`/blogs/${data?.id}`}>
            <a className={styles.link}>read more</a>
          </Link>
          {currentProfile && (
            <div className={styles.iconBox}>
              <span className={styles.counter}>{data?.liked_count}</span>
              {isFavorite ? (
                <FavoriteIcon
                  onClick={handleToggleFavorite}
                  className={`${styles.favoriteIcon} ${styles.icon}`}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={handleToggleFavorite}
                  className={styles.icon}
                />
              )}

              <ShareIcon className={styles.icon} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return {
    props: {
      data,
      error,
    },
  };
};

export default BlogCard;
