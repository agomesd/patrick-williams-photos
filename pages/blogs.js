import styles from "../styles/Blogs.module.css";
import useHooks from "../hooks/useHooks";
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const { blogs } = useHooks();
  return (
    <div className={styles.container}>
      <h1>Blogs</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard data={blog} />)
      ) : (
        <p>There are currently no blog posts.</p>
      )}
    </div>
  );
};

export default Blogs;
