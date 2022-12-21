import React,{useState,useEffect} from 'react'
import axios from "axios";
import MoreInfo from './MoreInfo.js'

export default function Body(props) {
    
    const [ans,setAns]= useState();
    const [Page,setPage] =useState(1);
    const [openCard ,setOpenCard] =useState(false);
    const [data,setData] =useState([]);   
  
   
  let QUERY=`{
            
      Page(page:${Page}) {
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
      
    }`
  
    if(props.Query!=="")
   {
       QUERY=`{
            
        Page(page:${Page}) {
          media(sort: POPULARITY_DESC, search:"${props.Query}" ) {
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
        
      }`
   }
    const getAnime = async() =>{
        
        const options = {
          method: 'POST',
          url: 'https://anilist-graphql.p.rapidapi.com/',
          headers: {
            'X-RapidAPI-Key':'f40520f1bfmsh51f1cedbc986419p16d9b1jsn55004c8d4c0f',
            'X-RapidAPI-Host': 'anilist-graphql.p.rapidapi.com'
          },
          data:{
            query : QUERY
              
          }
          
        };
        
       await axios.request(options)
        .then(function (response)
         {
            const res= response.data;
            setAns(res);
            
        })
        .catch(function (error) {
            console.error(error);
        });
             
        }
        
       useEffect(()=>{
        getAnime()
       },[Page,QUERY]);
      
       
       function HandleNext(){
        setPage(Page => Page + 1);  
       }

       function HandlePrev(){ 
        setPage(Page => (Page - 1));
       }
       function HandleMoreInfo(image,title,desc){
            let temp=[image,title,desc];
            setData(ele => [1,...temp]);
            return setOpenCard(true);
            
       }
       

       return(
           <>
            {ans ? (
                <>
            <div className="row row-cols-2 row-cols-md-5 g-4 body ">
                {
                      ans.data.Page.media.map((ele,index)=>{
                        
                        return(
                            
                         <div className="col tile" key={index}>
                          <div className="card h-100 tile2">
                                 <img src={ele.coverImage.large} className="card-img-top" alt="..."/>
                                 <div className='top-right'>⭐{(ele.averageScore)/10}</div>
                                     <div className="card-body">
                                         <h5 className="card-title">{(ele.title.english)?(ele.title.english):(ele.title.romaji)}</h5>                                                      
                                         {/* <a href="/" className="btn btn-primary btn-sm inTile">watchlist</a> */}
                                         <button href="/" className="btn btn-primary btn-sm" onClick={()=>HandleMoreInfo(ele.coverImage.extraLarge,ele.title.english,ele.description)}>MoreInfo</button>
                                    </div>
                                 </div>
                             </div>
                        ); 
                        })
                   
                }
               
              
               </div>
               {openCard===true ?<MoreInfo image={data[1]} title={data[2]} desc={data[3]} close={()=>setOpenCard(false)}/>:" "}
                    
               <div className=' justify-content-center  '> 
               <ul className='prevnxt '>
               <button className='btn btn-primary prev' disabled={Page<2} onClick={HandlePrev}>Prev</button>
              <>{Page}</>
                <button className='btn btn-primary prev' onClick={HandleNext}>Next</button>
               </ul>
               
                </div>
              
                
                </>
                
                ):"Loading..."}
            </>
        ); 
}


