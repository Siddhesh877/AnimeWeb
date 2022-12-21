import React from "react"
import Search from './Search.js';


export default function Header(){

   return( 
   <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">AnimeWeb</a>
    <button className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#navbar" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbar">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">YourList</a> */}
        </li>
        
      </ul>
      
    </div>
  </div>

  
</nav>
      <Search/>      


    </>)
}