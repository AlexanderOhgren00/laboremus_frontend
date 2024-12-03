import styles from './SubContainer.module.css';
import { useState, useEffect, useRef } from 'react';
import EventList from '../eventlabel/EventList';

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const SubContainer = ({eventRef}) => {
    const sliderImagesRef = useRef(null);
    const [events, setEvents] = useState([])

    useEffect(() => {

        const checkSlide = (e) => {
            const sliderImage = sliderImagesRef.current
            const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
            const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
            const isHalfShown = slideInAt > sliderImage.offsetTop;
            const isNoScrolledPast = window.scrollY < imageBottom;

            if(isHalfShown && isNoScrolledPast) {
                sliderImage.classList.add(styles['active']);
            } else {
                sliderImage.classList.remove(styles['active']);
            }
        };

        window.addEventListener('scroll', debounce(checkSlide));
        return () => window.removeEventListener('scroll', debounce(checkSlide)); // Clean up on unmount
    }, []);
    

    return (
        <div className={styles.subContainer} ref={eventRef}>
            <h2 className={styles.aboutText}>Om oss</h2>
            <div className={styles.eventContainer}>
                <div className={styles.slideContainer} ref={sliderImagesRef}>
                    <EventList events={events} setEvents={setEvents} />
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", flex: "1"}}>
                <h1 style={{color: "black"}}>Laboremus<br/> hittar alltid på<br/><span style={{color: "rgb(232, 37, 53)"}}>roliga<br/> evenemang</span></h1>
            </div>
        </div>
    )
}

export default SubContainer;