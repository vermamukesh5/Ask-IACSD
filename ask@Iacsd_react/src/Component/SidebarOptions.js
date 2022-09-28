import React from 'react';
import DAC from  '../Images/SidebarOptions/DAC.jpg';
import DBDA   from  '../Images/SidebarOptions/DBDA.jpg';
import DITISS from  '../Images/SidebarOptions/DITISS.jpg';
import CAT from  '../Images/SidebarOptions/CAT.jpg';
import SDM from  '../Images/SidebarOptions/SDM.jpg';

import "../Css/SidebarOptions.css";



// src\Images\SidebarOptions\Btech.jpg
function SidebarOptions() {
    return (
    <div className = "sidebarOptions">
        
            <a href="https://iacsd.com/pg-dac.php"  target="_blank" className = "sidebarOption" style = {{textDecoration: "none"}}><img src={DAC} alt="DAC"/>
                 <p>PG-DAC</p>
            </a>
            <a href="https://iacsd.com/pg-dbda.php"  target="_blank" className = "sidebarOption" style = {{textDecoration: "none"}}><img src={DBDA} alt="DAC"/>
                 <p>PG-DBDA</p>
            </a>
            <a href="https://iacsd.com/pg-ditiss.php"  target="_blank" className = "sidebarOption" style = {{textDecoration: "none"}}><img src={DITISS} alt="DAC"/>
                 <p>PG-DITISS</p>
            </a>
            <a href="https://iacsd.com/dasdm.php"  target="_blank" className = "sidebarOption" style = {{textDecoration: "none"}}><img src={SDM} alt="DAC"/>
                 <p>DASDM</p>
            </a>
            <a href="https://iacsd.com/pre_cat.php"  target="_blank" className = "sidebarOption" style = {{textDecoration: "none"}}><img src={CAT} alt="DAC"/>
                 <p>PG-CAT</p>
            </a>
            
    </div>
    )
}
export default SidebarOptions  