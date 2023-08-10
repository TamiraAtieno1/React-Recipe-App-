import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React from 'react'
import "./styles/index.scss"
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Settings from './pages/Settings'
import Instructions from "./components/Instructions"

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container main'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/:MealId" element={<Instructions/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;

