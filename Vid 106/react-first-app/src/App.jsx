import Navbar from "./components/navbar"
import Card from "./components/card"
import Footer from "./components/footer"
import "./index.css"
import React from "react"
function App() {


  return (
    <>
      <Navbar />
      <div className="cardss">
        <Card title="Introduction" desc="Hello, I'm Mehwish." />
        <Card title="Introduction" desc="Hello, I'm Mehwish." />
        <Card title="Introduction" desc="Hello, I'm Mehwish." />
        <Card title="Introduction" desc="Hello, I'm Mehwish." />
        <Card title="Introduction" desc="Hello, I'm Mehwish." />
      </div>
      <Footer />
    </>
  )
}

export default App
