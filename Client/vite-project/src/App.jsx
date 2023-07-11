import React from "react"
import Header from './Components/Header'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Card from './Components/Card'
import Login from './Components/Login'
import Footer from "./Components/Footer"

function App() {
  return (
    
      <div>
       <Header/>
       <Home/>
       <Contact/>
       <About/>
       <Card/>
       <Login/>
       <Footer/>
      </div>    
  )
}

export default App
