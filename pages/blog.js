import styles from "../styles/Blog.module.css";
import useHooks from "../hooks/useHooks";
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const { blogs } = useHooks();
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard data={blog} />)
      ) : (
        <p>There are currently no blog posts.</p>
      )}
    </div>
  );
};

export default Blog;
