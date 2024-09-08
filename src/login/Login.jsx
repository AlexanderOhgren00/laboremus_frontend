import styles from './Login.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const checkAuth = async () => {
        const response = await fetch("https://laboremus-77576a87044f.herokuapp.com/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({email: email, password: password})
        })
        if (!response.ok) {
            const message = "någonting på logginsidan gick fel"
            console.error(message)
            return
        }
        const auth = await response.json()
        localStorage.setItem("user", JSON.stringify({email, token: auth.token}))
        setLoggedIn(true)
        navigate("/admin", {state: true})    
    }

    const handleClick = () => {
        setEmailError("")
        setPasswordError("")

        if("" === email) {
            setEmailError("Email is required")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Invalid email")
            return
        }

        if("" === password) {
            setPasswordError("Password is required")
            return
        }

        if(password.length < 7) {
            setPasswordError("Password must be at least 7 characters")
            return
        }

        checkAuth()

    }

    useEffect(() => {
        async function getAuth() {
            const response = await fetch("http://localhost:3000/auth")
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message)
                return;
            }
            const auth = await response.json();
            console.log(auth[0])
        }
        getAuth();
        return
    }, [])


    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.textContainer}>
                <h1>Logga in</h1>
            </div>
            <div className={styles.inputContainer}>
                <input 
                type="text" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <label>{emailError}</label>
                <input 
                type="password" 
                placeholder="Lösenord"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <label>{passwordError}</label>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handleClick}>Logga in</button>
            </div>
        </div>
    )
}

export default Login