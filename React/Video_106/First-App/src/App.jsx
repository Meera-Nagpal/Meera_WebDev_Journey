


import "./App.css";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer"; // ✅ Correct path
import Card from "./components/Card";
function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
      <Card title="card1" description="card2 desc"/>
      <Card title="card1" description="card2 desc"/>
      <Card title="card1" description="card2 desc"/>
      <Card title="card1" description="card2 desc"/>
      </div>
      <Footer />

    </>
  )
}

export default App
