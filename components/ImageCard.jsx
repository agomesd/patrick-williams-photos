import styles from '../styles/ImageCard.module.css';

const ImageCard = ({ data }) => {
    return (
        <div className={styles.container}>
            <img src={data?.image_url} alt={data?.title}/>
        </div>
    )
}

export default ImageCard;