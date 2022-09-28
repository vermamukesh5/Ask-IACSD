import React from 'react';
import '../Css/Widget.css';
import WidgetOptions from './WidgetOptions';

function Widget(props) {
    console.log(props);
    return(
       <div className="widget"> 
       <div className = "widget__header">
           <h5>Also search for</h5>
          
       </div> 
       <WidgetOptions input={props.input} setInput={props.setInput}/>
     
       </div>
    );

}

export default Widget;