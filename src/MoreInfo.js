import React from "react";

export default function MoreInfo(props)
{
    return(
      <>
  <div className="modalBackground">
  <div className="modalContent card bg-dark  ">
  <img src={props.image} className="modalImage card-img" alt="..."/>
  <div className= " card-img-overlay">
  <a  className="btn-close btn-close-white btn btn-primary" onClick={props.close}></a>
    <h1 className="modalTitle card-title">{props.title}</h1>
    <p className=" card-text">{props.desc}.</p>
    
  </div>
</div>
               </div>
                
        </>
    )

}
