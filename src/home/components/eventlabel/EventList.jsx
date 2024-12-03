import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EventList.module.css";
import DownArrow from "../../../assets/icons/DownArrow";

const Event = (props) => (
    <div className={styles.eventContainer}>
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <p>{props.event.date}</p>
                <h2>{props.event.name}</h2>
                <Link to={`/admin/edit/${props.event._id}`}/>
            </div>
            {props.admin ? <div className={styles.buttonContainer}>
                <button onClick={() => {
                    props.deleteEvent(props.event._id)
                }}>Delete event</button>
                <button onClick={() => {
                    props.editEvent(props.event._id)
                }}>Edit event</button>
            </div> : null}
            <div className={styles.arrowContainer} onClick={props.handleClick}>
                <DownArrow height="45" width="45" color="black"/>
            </div>
        </div>
        <div className={styles.descriptionContainer}>
            <p>{props.event.description}</p>
        </div>
    </div>

)

const EventList = ({events, setEvents, admin}) => {

    useEffect(() => {
        async function getEvents() {
            const response = await fetch("https://laboremus-77576a87044f.herokuapp.com/events");
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message)
                return;
            }
            const events = await response.json();

            const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));
            setEvents(sortedEvents);
        }

        getEvents();
        return;
    },[events.length]);

    const handleClick = (e) => {
        console.log(e.target.classList)
        const descriptionContainer = e.target.closest(`.${styles.eventContainer}`).querySelector(`.${styles.descriptionContainer}`);
        console.log(descriptionContainer)
        descriptionContainer.classList.toggle(styles.flex);
    }

    async function deleteEvent(id) {
        await fetch(`https://laboremus-77576a87044f.herokuapp.com/events/${id}`, {
            method: "DELETE"
        })

        const newEvents = events.filter((el) => el._id !== id);
        setEvents(newEvents);
    }

    async function editEvent(id) {
        const name = prompt("Enter new name");
        const description = prompt("Enter new description");
        const date = prompt("Enter new date");
        await fetch(`https://laboremus-77576a87044f.herokuapp.com/events/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `${name}`,
                date: date,
                description: `${description}`
            })
        })

        const newEvents = events.filter((el) => el._id !== id);
        setEvents(newEvents);
    }

    function getEventDates() {
        return events.map(event => event.date);
    }

    function eventList() {
        return events.map((event) => {
            if (admin) {
                return <Event key={event._id} event={event} deleteEvent={deleteEvent} editEvent={editEvent} handleClick={handleClick} admin={admin} />
            } else {
                return <Event key={event._id} event={event} handleClick={handleClick}/>
            }
        })
    }

    return (
        <div className={styles.listContainer}>
            {eventList()}
        </div>
    )
}

export default EventList;
