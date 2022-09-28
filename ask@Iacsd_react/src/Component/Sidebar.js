  import React from 'react'
  import SidebarOptions from './SidebarOptions';
  import "../Css/Sidebar.css";

 // import Sidebar from './Sidebar';

  function Sidebar(){
      return(
          <div className = "sidebar">
              {/* Hello baby */}
              <SidebarOptions />
              
          </div>
      )
  }

  export default Sidebar