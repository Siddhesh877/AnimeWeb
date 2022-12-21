import React,{useEffect,useState} from 'react'

export default function Slider(){

    const [ans, setAns] = useState([]);
  
    const getAnswer = async () => {
      const responses = await fetch("https://api.jikan.moe/v4/recommendations/anime");
      setAns(responses.json());
      
    };
  
    useEffect(() => {
      getAnswer();
     
    },[])
      console.log(ans);
  
    return(
      <>
      
      {ans ? (
<>
{/* <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">

  <div class="card mb-3 card2" >
<div class="row g-0">
  <div class="col-md-4">
    <img src={ans.data[Math.floor((Math.random())*100)].entry[1].images.jpg.image_url} class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
    
  </div>
   




  <div class="carousel-item" data-bs-interval="2000">
  <div class="card mb-3 card2" >
<div class="row g-0">
  <div class="col-md-4">
    <img src={ans.data[Math.floor((Math.random())*100)].entry[1].images.jpg.image_url} class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
    
  </div>
  <div class="carousel-item">
  <div class="card mb-3 card2" >
<div class="row g-0">
  <div class="col-md-4">
    <img src={ans.data[Math.floor((Math.random())*100)].entry[1].images.jpg.image_url} class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div> 
  
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div> */}
</>
):"Loading"}
          

      </>
       

    );
}