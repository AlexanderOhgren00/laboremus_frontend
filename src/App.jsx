import { useState, useEffect, useRef } from 'react'
import './App.css'
import Home from "./home/Home.jsx";
import Navbar from "./navbar/Navbar.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState([])
  const eventRef = useRef(null)
  const calendarRef = useRef(null)
  const boardRef = useRef(null)
  const aboutRef = useRef(null)
  const homeRef = useRef(null)

  return (
    <>
      <Navbar eventRef={eventRef} calendarRef={calendarRef} boardRef={boardRef}
      aboutRef={aboutRef} homeRef={homeRef}/>
      <Home eventRef={eventRef} calendarRef={calendarRef} boardRef={boardRef}
      aboutRef={aboutRef} homeRef={homeRef}/>
    </>
  )
}

export default App
