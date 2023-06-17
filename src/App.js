import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
toast.configure();

function App() {
 const [colorNames] = useState(['#ff9ff3', '#feca57','#c8d6e5','#54a0ff','#01a3a4','#2e86de','#341f97','#8395a7',
 '#f368e0','#ff9f43','#ee5253','#10ac84']);
 const colorPick = (e) => {
   let colorCopy = e.target.innerText;
   if(navigator.clipboard){
     navigator.clipboard.writeText(colorCopy);
     navigator.clipboard.readText()
     toast.success(`you have success ${colorCopy} your value`,{
       position: toast.POSITION.BOTTOM_CENTER
     })

   }
 }
 
 return (
    <div>
      <h1>Color Picker</h1>
    <div className="App">
    {colorNames.map(color => (
    <div className="box" key={color} style={{background: color}} onClick={colorPick} >
      <div>{color}</div>
    </div>

    ))}     
   

      
    </div>
    </div>
  );
}

export default App;
