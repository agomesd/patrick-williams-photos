import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/BlogCard.module.css";

const BlogCard = ({ data, loading }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {loading ? (
        <p className={styles.loading}>...loading</p>
      ) : (
        <div onClick={() => router.push(`/blogs/${data?.id}`)}>
          <div className={styles.image}>
            <img src={data?.image_url} alt={data?.title} />
          </div>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.date}>{data?.created_at}</p>
          <p className={styles.description}>{data?.description}</p>
          <Link href={`/blogs/${data?.id}`}>
            <a className={styles.link}>read more</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
