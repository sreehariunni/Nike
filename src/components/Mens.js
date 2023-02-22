import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Mens() {
  return (
       
   <>
   <h1 style={{fontFamily:'monospace'}}> Featured</h1>

        <div>
        <h1>
        <div class="card bg-dark text-white">
  <img src="https://i.postimg.cc/br6WZ6PV/20c78cca-5faf-4caf-9afe-7a2a1ccb9f05.webp" class="card-img" alt="Stony Beach"/>
 
</div>
        </h1>
    </div>
    <div style={{backgroundColor:'white',textAlign:'center'}}>
        <h4 style={{color:'black'}}>Nike invincible</h4>
        <h1 style={{fontFamily:'sans-serif',color:'black'}}> <b>FEEL ALL THE FEELS</b></h1>
        <p style={{color:'black'}}>
<b>            Find that thing that makes you feel invincible while rocking the Nike Invincible 3's on your next run.
</b>            </p>


    </div>
    <Row xs={1} md={2} className="" style={{backgroundColor:'white'}}>
        <Col >
          <Card style={{backgroundColor:'white'}}>
            <Card.Img variant="top" src="https://i.postimg.cc/rFdGv8sR/dbd86458-f50b-4af4-a96b-31fe044045c5-1.webp" />
            <Card.Body>
              <Card.Title style={{color:'black'}}>Geth the Latest look for your NEXT RUN!!!!</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{backgroundColor:'white'}}>
            <Card.Img variant="top" src="https://i.postimg.cc/7Lq2YDHV/men-s-shoes-clothing-accessories-1.jpg" />
            <Card.Body>
              <Card.Title style={{color:'black'}}>Resposive Razer : Nike zoom FLY 5</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
    </Row>



<br/>


    <div class="card mb-3">
  <img src="https://i.postimg.cc/QtwgMPnd/e9f31343-cd2a-469c-82ae-15cc0cedffb7.webp" class="card-img-top" alt="Wild Landscape"/>
  <div class="card-body" style={{backgroundColor:'white'}}>
    <h2 class="card-title" style={{color:'black'}}><b>JORDEN MEN</b></h2>
    

  </div>
</div>








<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/dtgn57qx/037c9c79-9166-42e4-a446-a29c4f7a0e8f.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Nike Dri-FIT Unscripted</h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>      </div>
            
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/2Snk6X28/sportswear-tech-fleece-hoodie-bxk5v8.jpg" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Nike Sportswear Tech Fleece</h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>      </div>

     
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/3wWvzh3b/61fc9d7a-992e-4166-b2a6-979521ba30f6.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Nike Alphafly 2</h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>
</div>



    {/* ---------------------------------------------------------------------------------------------------- */}


    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/6pfzLn0L/3932d1df-ab51-4af1-b4f8-d505f49fd975.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>F.C. Barcelona 2022/23 Stadium Home</h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/qv8z67jK/ce7c995f-ba6a-4fe1-bd80-6357a199f978.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Paris Saint-Germain
Men's Fleece Trousers</h5>
<button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/hGYWSLT1/0acf18e2-7d97-4293-acd8-ffa96b7884d5.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Jordan Flight Heritage</h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>
</div>

<br/>
<div class="card mb-3" style={{backgroundColor:'white'}}>
  <img src="https://i.postimg.cc/VNbvPBVX/9551bc67-ad93-4e00-b26f-023c9c57c4b6.webp" class="card-img-top" alt="Wild Landscape"/>
  
</div>




   </>
  )
}

export default Mens