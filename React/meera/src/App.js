import './App.css';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  const [value,setvalue]=useState(0)
  return (
    <div className="App">
       <Nav logotext="CodewithCWH Harry" /> 
    <div className='value'>{value}</div>
    <button onClick={()=>{setvalue(value+1)}}>ClickMe</button>
<Footer/>
    </div>
  );
}

export default App;
