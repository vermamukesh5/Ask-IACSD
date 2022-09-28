import React from 'react';
import  '../Css/WidgetOptions.css';
import sports from '../Images/sports.jpg';
import placement from '../Images/placement.png';
import examination from '../Images/examination.png';
import interview from '../Images/interview.png';
import project from '../Images/project.jpg';


function WidgetOptions(props)

{
    console.log(props);
     return (
        <div className = "widget__contents">
            <div className="widget__content" onClick={()=> props.setInput("sports")}>
                <img src={sports} alt=""></img>
                <div className="widget__contentTitle">
                    <h5>Sports</h5>   
                </div>
            </div>
            <div className="widget__content" onClick={()=> props.setInput("placement")}>
                <img src={placement} alt=""></img>
                <div className="widget__contentTitle">
                    <h5>Placements</h5>   
                </div>
            </div>  
            <div className="widget__content" onClick={()=> props.setInput("projects")}>
                <img src={project} alt=""></img>
                <div className="widget__contentTitle">
                    <h5>Projects</h5>   
                </div>
            </div>  
            <div className="widget__content" onClick={()=> props.setInput("interview")}>
                <img src={interview} alt=""></img>
                <div className="widget__contentTitle">
                    <h5>Interview</h5>   
                </div>
            </div>  
            <div className="widget__content" onClick={()=> props.setInput("examination")}>
                <img src={examination} alt=""></img>
                <div className="widget__contentTitle">
                    <h5>Examination</h5>   
                </div>
            </div>        
        </div>


     );

}
export default WidgetOptions;