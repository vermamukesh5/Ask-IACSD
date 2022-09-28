import React from "react";
import "../Css/QuoraBox.css";
import { Avatar } from "@material-ui/core";
import { useSelector }  from "react-redux";
import { selectUser } from "../features/userSlice";
import Navbar from "./Navbar";

function QuoraBox(){

    const user = useSelector(selectUser);
    const handleQuestion = (e) =>{
        document.getElementById("addQuestion").click();
    }
    return ( 
         <div className="quora_box">
         <div className="quoraBox">
             <div className="quoraBox__info">
                 <Avatar     src= {user.photo}/>
                 <h5>{user.displayName}</h5>
             </div>

             <div className = "quoraBox__quora" onClick = {handleQuestion}>
                  <p>What is your question or link ?</p>
                 
             </div>
         </div>
         </div>
    );
}

export default QuoraBox;


  