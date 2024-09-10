import styles from './Home.module.css';
import SubContainer from './components/subcontainer/SubContainer.jsx';
import StyrelseContainer from "./components/styrelsecontainer/StyrelseContainer.jsx";
import Laboremus_logga from "../assets/icons/Laboremus_logga.png"
import CalendarContainer from './components/calendar/CalendarContainer.jsx';
import About from './components/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Home = ({eventRef, calendarRef, boardRef, aboutRef, homeRef}) => {

    const handleClick = () => {
        window.location.href = "https://s-studenter.se/bli-medlem/"
    }
    return (
        <>
            <div className={styles.homeContainer} ref={homeRef}>
                <div style={{textAlign: "left", display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column"}}>
                    <h1 style={{color: "rgb(255, 255, 255)", marginBottom: "0px"}}>Välkommen till Laboremus<br/><span style={{color: "black"}}>S-studenters</span> förening<br/><span style={{color: "black"}}>i Uppsala</span></h1>
                    <h3 style={{color: "white"}}>Vill du vara med och påverka?</h3>
                    <button onClick={handleClick}>Bli medlem</button>
                </div>
                <div style={{position: "absolute", top: "80%", color: "white", left: "60%", fontFamily: "cursive"}}>
                </div>
            </div>
            <About aboutRef={aboutRef}/>
            <SubContainer eventRef={eventRef}/>
            <CalendarContainer calendarRef={calendarRef}/>
            <StyrelseContainer boardRef={boardRef}/>
            <Footer />
        </>
    );
}

export default Home;