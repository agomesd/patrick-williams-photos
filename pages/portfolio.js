import { supabase } from "../utils/initSupabase";
import ImageCard from "../components/ImageCard";
import styles from "../styles/pages/Portfolio.module.css";

const Portfolio = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Portfolio</h1>
      {data?.length > 0 ? (
        <div className={styles.grid}>
          {data?.map((image) => (
            <ImageCard data={image} key={image.id}/>
          ))}
        </div>
      ) : (
        <p>There are currently no images</p>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  let { data, error } = await supabase.from("images").select("*");

  return {
    props: { data, error },
  };
};

export default Portfolio;
