import React from 'react'

export default function Prev_nxt(prop){
    return(
        <>
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link" href={prop.prev}>Previous</a></li>
          <li className="page-item"><a className="page-link" href={prop.first}>1</a></li>
          
          <li className="page-item"><a className="page-link" href={prop.next}>Next</a></li>
        </ul>
      </nav>
        </>
    );
   
}