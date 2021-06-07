import { useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import styles from "../styles/Home.module.css";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("id", { ascending: false })
        .limit(3);

      if (error) console.log(error.message);

      setBlogs(data);
    } catch (error) {
      console.log("error: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

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
          <Link href="/about">
            <a className={`${styles.aboutLink} ${styles.link}`}>About</a>
          </Link>
        </div>
      </div>
      <div className={styles.secondary}>
        <div className={styles.blogsGrid}>
          <BlogCard data={blogs[0]} loading={loading} />
          <BlogCard data={blogs[1]} loading={loading} />
          <BlogCard data={blogs[2]} loading={loading} />
        </div>
        <Link href='/blogs'>
          <a className={`${styles.blogLink} ${styles.link}`}>All Blog Posts</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
