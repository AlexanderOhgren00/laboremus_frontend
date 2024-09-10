import styles from './Navbar.module.css';
import Laboremus_logga from "../assets/icons/Laboremus_logga.png"
import KalenderIcon from '../assets/icons/KalenderIcon';
import StyrelseIcon from '../assets/icons/StyrelseIcon';
import AboutIcon from '../assets/icons/AboutIcon';
import EvenemangIcon from '../assets/icons/EvenemangIcon';
import HomeIcon from '../assets/icons/HomeIcon';

const Navbar = ({homeRef, aboutRef, calendarRef, eventRef, boardRef}) => {

    const scrollTo = (section) => {
        window.scrollTo({top: section.current.offsetTop, behavior: "smooth"});

    }

    return (
        <div className={styles.navbarContainer}>
            <img src={Laboremus_logga} alt="Laboremus logga" style={{width: "50px", height: "50px", marginRight: "auto"}}/>
            <div onClick={() => scrollTo(homeRef)}>
                <HomeIcon width="30px" height="30px"/>
                <h4 className={styles.navbarText}>Laboremus</h4>
            </div>
            <div onClick={() => scrollTo(eventRef)}>
                <EvenemangIcon width="30px" height="30px"/>
                <h4>Evenemang</h4>
            </div>
            <div onClick={() => scrollTo(calendarRef)}>
                <KalenderIcon width="30px" height="30px"/>
                <h4>Kalender</h4>
            </div>
            <div onClick={() => scrollTo(boardRef)}>
                <StyrelseIcon width="30px" height="30px"/>
                <h4>Styrelsen</h4>
            </div>
            <div style={{marginRight: "40px"}} onClick={() => scrollTo(aboutRef)}>
                <AboutIcon width="30px" height="30px"/>
                <h4>Om oss</h4>
            </div>        
        </div>
    )
}
export default Navbar;