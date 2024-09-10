import styles from "./Footer.module.css";
import NeurasiteIcon from "../../../assets/icons/NeurasiteIcon.jsx";

const handleClick = () => {
    window.location.href = "https://www.neurasite.se/"
}

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.sponsorContainer}>
                <div className={styles.neurasiteContainer}>
                    <h3>Sponsrad av Neurasite</h3>
                    <p onClick={handleClick}>www.neurasite.se</p>
                </div>
                <NeurasiteIcon width={150} height={150}/>
            </div>
        </div>
    );
}

export default Footer;