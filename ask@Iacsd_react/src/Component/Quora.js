import React, { useState } from 'react';
import "../Css/quora.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
function Quora()
{
    console.log("update");
    const [input, setInput] = useState("");
    const onChange = (e) => {
        
        setInput(e.target.value);
    }
    return(
        <div className="quora">
       <Navbar onSearchChange = {onChange} currentInput = {input}/>
       <div className = "quora__content" >
           <Sidebar/>
           <Feed input = {input}/>
           <Widget setInput = {setInput} input={input}/>
          
       </div>
       
        </div>
    );
}
export default Quora;