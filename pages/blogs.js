import useHooks from "../hooks/useHooks";
import BlogCard from "../components/BlogCard";
import styles from "../styles/pages/Blogs.module.css";

const Blogs = () => {
  const { blogs } = useHooks();
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Blogs</h1>
      <div className={styles.grid}>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard data={blog} key={blog.id} />)
        ) : (
          <p>There are currently no blog posts.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
