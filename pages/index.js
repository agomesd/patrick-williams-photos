import { supabase } from "../utils/initSupabase";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import ImageCard from "../components/ImageCard";
import styles from "../styles/Home.module.css";

const Index = ({ images, blogs, imagesError, blogsError }) => {

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.backImage}></div>
        <div className={styles.content}>
          <h2 className={`${styles.title} ${styles.heading}`}>
            Patrick Williams Photography
          </h2>
          <p className={styles.description}>
            Bacon ipsum dolor amet turducken corned beef cupim, boudin
            prosciutto spare ribs pork andouille landjaeger ribeye.
          </p>
          <Link href="/about">
            <a className={`${styles.aboutLink} ${styles.link}`}>About</a>
          </Link>
        </div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.blogsGrid}>
          {blogsError && console.log(blogsError.message)}
          {blogs?.map((blog) => (
            <BlogCard data={blog} key={blog.id} />
          ))}
        </div>
        <Link href="/blogs">
          <a className={`${styles.blogLink} ${styles.link}`}>All Blog Posts</a>
        </Link>
      </div>
      <div className={styles.portfolio}>
        <h1 className={styles.title}>Portfolio</h1>
        <div className={styles.slideshow}>
          {imagesError && console.log(imagesError.message)}
          {images?.map((image) => (
            <ImageCard data={image} key={image.key} />
          ))}
        </div>
        <Link href="/portfolio">
          <a className={`${styles.blogLink} ${styles.link}`}>Portfolio</a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data: images, error: imagesError } = await supabase
    .from("images")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(25);

  const { data: blogs, error: blogsError } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return {
    props: { images, blogs, imagesError, blogsError },
  };
};

export default Index;
