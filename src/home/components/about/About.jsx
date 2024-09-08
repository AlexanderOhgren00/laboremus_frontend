import styles from './About.module.css';
import DownArrow from '../../../assets/icons/DownArrow.jsx';
import { useState, useRef } from 'react';

const About = ({aboutRef}) => {

    const [color, setColor] = useState("rgb(232, 37, 53)");
    const dropdownRef = useRef(null);
    const textContainerRef = useRef(null);
    const buttonRef = useRef(null);
    const arrowRef = useRef(null);

    const handleDropdown = () => {
        dropdownRef.current.classList.toggle(styles['active']);
        textContainerRef.current.classList.toggle(styles['textActive']);
        buttonRef.current.classList.toggle(styles['reversePulldown']);
        arrowRef.current.classList.toggle(styles['reverseArrow']);
    }

    return (
        <>
        <div className={styles.aboutContainer} ref={dropdownRef}>
            <div className={styles.upperLine}></div>
            <div ref={textContainerRef} className={styles.textContainer}>
                <div className={styles.infoContainer}>
                    <div>
                        <h2>Vad är <br/><span>Laboremus?</span></h2>
                    </div>
                    <h3 ref={aboutRef}>Laboremus är hjärtat av det socialdemokratiska studentlivet med rötter som sträcker sig tillbaka till 1902.</h3>
                    <p>
                        <br/>Vi är mer än bara en studentförening; vi är en passionerad samling av socialdemokratiska studenter 
                        som strävar efter att forma framtiden genom engagemang och progressiva idéer.Vårt arv är djupt rotat i den socialdemokratiska rörelsen, 
                        och genom åren har vi anpassat oss till nya utmaningar och förändringar. Vi tror på att medlemmarna ska leda vägen framåt, 
                        och därför är det viktigt för oss att ständigt utvecklas och utforska nya vägar för samhällsförändring. 
                        Som en del av det socialdemokratiska partiet och studentförbund i Uppsala är vi drivande i den politiska utvecklingen både här i Uppsala och i hela Sverige.
                    </p>
                </div>
                <div className={styles.infoContainer}>
                    <div>
                        <h2>Vad gör <br/><span>Laboremus?</span></h2>
                    </div>
                    <h3>Genom en mångsidig verksamhet strävar vi efter att engagera människor med olika politiska intressen och övertygelser.</h3>
                    <p> 
                    <br/>Från att försvara studenters rättigheter till att främja jämställdhet och miljöskydd, vår mångfacetterade agenda omfattar en rad viktiga ämnen.
                    Laboremus är inte rädda för att ta itu med de stora frågorna. Vi arrangerar seminarier och föreläsningsserier för att lyfta viktiga politiska ämnen, 
                    från feminism till miljöpolitik och internationell solidaritet, våra evenemang är en plattform för diskussion och lärande. Efter ett evenemang går vi ut på en laboremoöl! Vi går på nation, 
                    dricker öl och diskuterar politik och fångar upp idéer och tankar som uppkommer efter eventet. För vi tror på att förändring börjar med en gemenskap och ett tankeutbyte. 
                    För oss är det inte bara en förening - det är en gemenskap av individer som brinner för förändring och strävar efter att forma en bättre värld.
                    Missa inte chansen att engagera dig och vara en del av den drivande kraften för förändring! Tillsammans kan vi göra skillnad och kämpa för en mer rättvis och inkluderande framtid.</p>
                </div>         
            </div>
            <div className={styles.bottomLine}></div>
        </div>
        <div>
            <div className={styles.pulldownCircle} onMouseOver={() => setColor("white")} onMouseLeave={() => setColor("rgb(232, 37, 53)")} onClick={handleDropdown} ref={buttonRef}>
                <DownArrow width="45px" height="45px" color={color} ref={arrowRef}/>
            </div>
        </div>
        </>  
    );
}

export default About;