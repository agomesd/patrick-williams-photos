import { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import styles from "../styles/components/ImageCard.module.css";

const ImageCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleOptions = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleToggleOptions}
      onMouseLeave={handleToggleOptions}
    >
      <h3 className={isHovered ? styles.showCaption : styles.hideOptions}>
        {data?.caption}
      </h3>
      <img src={data?.image_url} alt={data?.title} />
      <div className={isHovered ? styles.showOptions : styles.hideOptions}>
        <FavoriteBorderIcon className={styles.icon} />
        <ShareIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default ImageCard;
