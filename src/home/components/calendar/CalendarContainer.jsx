import Calendar from "react-calendar";
import { useState, useEffect, useRef } from "react";
import styles from "./CalendarContainer.module.css";;
import EventList from "../eventlabel/EventList";
import "./my_calendar.css";

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

const CalendarContainer = ({calendarRef}) => {
    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [month, setMonth] = useState([]);
    const [year, setYear] = useState([]);
    const [events, setEvents] = useState([])

    const sliderImagesRef = useRef(null);

    function getEventDates() {
        return fetch("https://laboremus-77576a87044f.herokuapp.com/events")
            .then(response => {
                if (!response.ok) {
                    const message = `An error has occurred: ${response.statusText}`;
                    console.error(message)
                    return;
                }
                return response.json();
            })
            .then(events => {
                setEvents(events);
                const eventlist = events.map(event => event.date);
                for (let i in eventlist) {
                    eventlist[i] = eventlist[i].split("-");
                }
                setDays(eventlist.map(event => parseInt(event[2])));
                setMonth(eventlist.map(event => parseInt(event[1].replace(/^0+/, ''))));
                setYear(eventlist.map(event => parseInt(event[0])));
            })
    }

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

    useEffect(() => {
        getEventDates()
    }, []);

    useEffect(() => {
        console.log(days, month, year);
    }, [days, month, year]);

    useEffect(() => {
        console.log(events);
    }, [events]);

    return (
        <div className={styles.subContainer} ref={calendarRef}>
            <div style={{width: "50%", display: "flex", justifyContent: "flex-start"}}>
                <h1>Välkommen till <br/> ett helt år av <br/> spännande <span style={{color: "black"}}>underhållning</span></h1>

            </div>
            <div className={styles.slideContainer} ref={sliderImagesRef}>
                <Calendar
                    tileClassName={({date, view}) => {
                        for (let i in days) {
                            if (date.getDate() === days[i] && date.getMonth() + 1 === month[i] && date.getFullYear() === year[i]) {
                                return "sunday";
                                
                            }
                        }
                        return ""; // Add a default return statement
                    }}
                    onChange={setDate}
                    value={date}
                />
            </div>
        </div>
    );
}

export default CalendarContainer;