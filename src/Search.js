import React,{useState} from 'react'
import Body from './Body.js';

export default function Search(){

    const [search,setSearch]=useState("");
    const [query,setQuery]=useState(`{
            
        Page(page:1) {
          media(sort: POPULARITY_DESC ) {
            id
            title {
              romaji
              english
            }
            coverImage {
              large
              extraLarge
            }
            averageScore
              description(asHtml:false)
            
          }
         
        }
        
      }`);
   
    function handleChange(e){
        e.preventDefault();
        setSearch(e.target.value);
        
    }
    function handleSubmit(e){
        e.preventDefault();
        setQuery(`{
            
            Page(page:1) {
              media(sort: POPULARITY_DESC ,search:"${search}") {
                id
                title {
                  romaji
                  english
                }
                coverImage {
                  large
                  extraLarge
                }
                averageScore
                  description(asHtml:false)
                
              }
             
            }
            
          }`);
        
    }
    
    

return(
<>
<div className='container-fluid'>
    <form className="d-flex" onSubmit={handleSubmit} >
        <input className="form-control me-2 form-control-sm" type="text" value={search} placeholder="Search" onChange={handleChange}/>
        <input className="btn btn-outline-success btn-sm" type="submit" value="search" />
    </form>
    </div>
    <Body Query={search}/>
</>
    );
}