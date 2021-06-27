import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/initSupabase";
import styles from "../../styles/pages/Blog.module.css";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const blogId = router.query.blog;

  const getBlog = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", blogId)
        .single();

      if (error) console.log("error: ", error.message);

      setBlog(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const blogEvents = supabase
    .from("blogs")
    .on("*", (payload) => {
      console.log("Database has been updated", payload);
    })
    .subscribe();

  useEffect(() => {
    getBlog();
  }, [blogEvents]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${blog?.image_url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.header}>
        <h1 className={styles.heading}>{blog?.title}</h1>
        <p className={styles.date}>{blog?.created_at}</p>
      </div>
      <div className={styles.grid}></div>
    </div>
  );
};

export default Blog;
