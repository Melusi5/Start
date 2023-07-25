import React from "react"
import Header from './Components/Header'
import Home from './Pages/Home'
import Video from './Pages/Video'
import Card from './Components/Card'
import Repairs from './Components/Repairs'
import Login from './Components/Login'
import Footer from "./Components/Footer"

function App() {
  return (
    
      <div>
       <Header/>
       <Home/>
       <Video/>
       <Card/>
       <Repairs/>
       <Login/>
       <Footer/>
      </div>    
  )
}

export default App
