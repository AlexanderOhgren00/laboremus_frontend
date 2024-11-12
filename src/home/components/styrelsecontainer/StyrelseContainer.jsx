import styles from "./StyrelseContainer.module.css";
import DownArrow from "../../../assets/icons/DownArrow.jsx";
import { useState, useRef } from "react";
import Hugo from "../../../assets/pictures/Hugo.jpg";
import Johanna from "../../../assets/pictures/Johanna.jpeg";
import Lukas from "../../../assets/pictures/Lukas.jpg";
import Lovisa from "../../../assets/pictures/Lovisa.jpg";
import Axel from "../../../assets/pictures/Axel.jpg";
import Hampus from "../../../assets/pictures/Hampus.jpg";
import Julia from "../../../assets/pictures/Julia.jpg";
import Ilayda from "../../../assets/pictures/Ilayda.jpg"
;

const StyrelseContainer = ({boardRef}) => {

    const [color, setColor] = useState("rgb(232, 37, 53)");
    const textRef = useRef(null);

    const handleHover = () => {
    
        textRef.current.style.display = "block";
    }

    return (
        <div className={styles.styrelseContainer} ref={boardRef}>
            <div>
                <h1 style={{color: "black"}}>Vi som sitter i styrelsen för <span style={{color: "rgb(232, 37, 53)"}}>Laboremus</span></h1>
            </div>
            <div className={styles.container}>
                <div className={styles.styrelseCard} onMouseEnter={handleHover}>
                    <div className={styles.imageContainer}>
                        <img src={Axel} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Axel Melbin</b></h4>
                        <p>Ordförande</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p>Jag heter Axel Melbin och är ordförande för Laboremus. Jag pluggar jämförande indoeuropeisk språkforskning och juridik här i Uppsala. När jag inte fyller min tid med att vara aktiv i Laboremus brukar jag spela dragspel, engagera mig på nation och odla potatis. Jag är kroniskt föreningsberoende och innehar rekord i min vänskapskrets i antal styrelseposter för olika föreningar.</p>
                    </div>
                </div>
                <div className={styles.styrelseCard}>
                    <div className={styles.imageContainer}>
                        <img src={Lovisa} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Lovisa Hamrin</b></h4>
                        <p>Vice ordförande</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p>Hej! Lovisa heter jag och är vice ordförande i Laboremus! Min roll i styrelsen är därmed att hjälpa till med ordförandearbetet, till exempel hålla i möten när Axel inte kan närvara. Förutom att vara aktiv i Laboremus läser jag också en kandidat i biologi, så miljö och biologisk mångfald är frågor jag brinner lite extra för!</p>
                    </div>
                </div>
                <div className={styles.styrelseCard}>
                    <div className={styles.imageContainer}>
                        <img src={Hugo} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Hugo Granström</b></h4>
                        <p>Ordinarie styrelseledamot</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p>
                            Jag heter Hugo och studerar juridik här i världens bästa stad. Med en förkärlek för Wennerberg och skattepolitik går jag optimistiskt fram med tanken att Laboremus ska bli den största studentföreningen i landet (oavsett vad Stockholms S-studenter har att säga om saken). Jag ansvarar för styrelsen evenemang och kampanjer.
                        </p>
                    </div>
                </div>
                <div className={styles.styrelseCard}>
                    <div className={styles.imageContainer}>
                        <img src={Johanna} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Johanna Petrovic</b></h4>
                        <p>Ordinarie styrelseledamot</p>
                    </div>
                    <div>
                        <p>Jag heter Johanna och är ordinarie styrelseledamot i Laboremus. Jag gillar katter och att spela escaperoom! Just nu pluggar jag till socionom termin 3 här i Uppsala.</p>
                    </div>
                </div>
                <div className={styles.styrelseCard}>
                    <div className={styles.imageContainer}>
                        <img src={Lukas} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Lukas Näslund</b></h4>
                        <p>Ordinarie styrelseledamot</p>
                    </div>
                    <div><p>Hej, jag heter Lukas och är ordinarie styrelseledamot i Laboremus. Därtill läser jag en master i Rysslands- och Eurasienstudier.</p></div>
                </div>
                <div className={styles.styrelseCard}>
                    <div className={styles.imageContainer}>
                        <img src={Julia} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Julia Karlsson</b></h4>
                        <p>Ordinarie styrelseledamot</p>
                    </div>
                    <div className={styles.textContainer}><p>Mitt namn är Julia och pluggar Pol Kand här i Uppsala. Tre fakta om mig är att jag aldrig säger nej till en utgång, är en fartdåre på cykel och har bäst humor i Laboremus. Motto: "inget är för storslaget" eller "allt går att fira". Jag är medlemsansvarig och kårpolitiskt ansvarig. 
                    </p></div>
                </div>
                <div className={styles.styrelseCard}>
                    <div className={styles.imageContainer}>
                        <img src={Hampus} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Hampus Nyhlén</b></h4>
                        <p>Kassör</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p>Jag heter Hampus och är ekonomiansvarig för studentföreningen "Laboremus" här i Uppsala. När jag inte jobbar med föreningens budget och ekonomiska frågor, tycker jag om att komma ut i naturen och vandra. Det är något speciellt med att bara ta sig ut och uppleva friheten på en vandringsled – det ger mig en chans att koppla av och ladda upp efter intensiva studier och föreningsarbete.</p>
                    </div>
                </div>
                <div className={styles.styrelseCard}>
                    <div className={styles.imageContainer}>
                        <img src={Ilayda} alt="Avatar"/>
                    </div>
                    <div className={styles.styrelseCardContainer}>
                        <h4><b>Ilayda Tatli</b></h4>
                        <p>Ordinarie styrelseledamot</p>
                    </div>
                    <div className={styles.textContainer}>
                        <p>Hej! Mitt namn är Ilayda Tatli och jag studerar lite blandat.. kommer från Lapplands djupa skogar, och har hittat mig ner till världens bästa student stad! Laboremus är en fantastisk s-student förening för dig som vill både engagera dig politiskt, men även hitta ett härligt gäng att hänga med!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StyrelseContainer;

//<div className={styles.styrelseCard}>
//<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
//<div className={styles.styrelseCardContainer}>
//    <h4><b>John Doe</b></h4>
//    <p>CEO & Founder</p>
//</div>
//</div>	