import EventList from "../home/components/eventlabel/EventList"
import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Admin.module.css"
import { useLocation } from "react-router-dom"

const Admin = (props) => {

    const [events, setEvents] = useState([])
    const [name, setName] = useState("")
    const [date, setDate] = useState(new Date())
    const [description, setDescription] = useState("")
    const { loggedIn, email} = props
    const { state } = useLocation()
    const token = window.localStorage.getItem("user")
    const test = false
    const admin = true
    const navigate = useNavigate()

    useEffect(() => {
        console.log("this is the state", state)
    }, [state])

    useEffect(() => {
        console.log(`current name: ${name} current date: ${date}`)
    }, [name, date])

    async function createEvent(name, date, description) {
        const response = await fetch("https://laboremus-77576a87044f.herokuapp.com/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: `${name}`,
                date: date,
                description: `${description}`
            })
        })

        if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            console.error(message)
            return;
        }

        const newEvent = await response.json();
        setEvents([...events, newEvent])
    }


    return state ? (
        <div className={styles.adminContainer}>
            <h1 style={{color: "black"}}>Admin Page</h1>
            <div className={styles.dashBoard}>
                <div className={styles.createEventContainer}>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Event name" />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Event description" />
                    <input type="date" onChange={(e) => setDate(e.target.value)} />
                    <button onClick={() => createEvent(name, date, description)}>Create Event</button>
                </div>
                <EventList events={events} setEvents={setEvents} admin={admin}/>
            </div>
        </div>
    ) : (
        <div className={styles.welcomeContainer}>
            <div className={styles.textContainer}>
                <h1>Välkommen!</h1>
                <p>det här är administrationssidan</p>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={() => navigate("/login")}>Logga in</button>
                
            </div>
        </div>
    )
}

export default Admin