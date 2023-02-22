import React from 'react'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,MDBCardBody
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Kids() {
  return (
    <>
  <div>      <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://i.postimg.cc/jSVrJFH9/9b110e5e-6799-4b41-8908-55790ea05e28-1.webp' alt='...' />
      <MDBCardOverlay>
<h1 style={{color:'black'}}>Kid's</h1>    
      </MDBCardOverlay>
    </MDBCard></div>

    <div style={{backgroundColor:'white',textAlign:'center'}}>
        <h1 style={{fontFamily:'sans-serif',color:'black'}}> <b>BOLD <span style={{color:"green"}}>BEGINNINGS !!!</span> </b></h1> 
        <p style={{color:'black'}}>
<b>            SIZES FOR ALL 
</b>            </p></div>











<Row xs={1} md={2} className="g-4">
        <Col style={{backgroundColor:'black'}}>
          <Card>
            <Card.Img variant="top" src="https://i.postimg.cc/13ZwYy0K/7486509c-f30f-4068-921e-b65736a4caeb.webp" />
            <Card.Body>
              <Card.Title>T SHIRT'S</Card.Title>
            
            </Card.Body>
          </Card>
        </Col>

        <Col style={{backgroundColor:'BLACK'}}>
          <Card >
            <Card.Img variant="top" src="https://i.postimg.cc/3NTvNT8B/64d188d4-a007-44da-95db-ec0fbffaba8c.webp" />
            <Card.Body>
              <Card.Title>NEW ARRIVAL'S</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>

    </Row>






    <MDBCard className='mb-3'>
        <MDBCardImage position='top' src='https://i.postimg.cc/c4kNTLYM/85278f00-2a74-431b-be88-671d35e30b37.webp' alt='...' />
        <MDBCardBody style={{textAlign:'center',backgroundColor:'black'}}>
          <MDBCardTitle>JORDAN <span style={{color:'red'}}>24/7</span></MDBCardTitle>
          <MDBCardText>
         Explore the KID'S section
          </MDBCardText>
       
        </MDBCardBody>
      </MDBCard>

    





      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/7YfV5VdQ/79eef5b5-c833-4552-aae8-b8aad20a70c4.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Nike Culture of Basketball
Older Kids'  </h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/rp0XgxDh/89084f01-3bb1-4312-858c-e9753d787d35.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Paris Saint-Germain
Men's Fleece Trousers
</h5>
<button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/J0w1jKKc/fbc235cb-a824-478e-986b-55fe53c1cfae.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Jordan 1 Retro High OG
Baby/Toddler Shoes</h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>
</div>











<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/SxbMmfh9/034879fc-f19c-4a7c-800d-803c243db6ec.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Nike Sportswear
Older Kids' T-Shirt </h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/y8Jspw5X/58a659d8-7417-4108-adf7-360e10432649.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Nike Heritage86
Kids' Adjustable Hat
</h5>
<button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src="https://i.postimg.cc/g0SycL4P/dri-fit-trophy23-older-training-shorts-VBp0c-T.jpg" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title" style={{fontFamily:'monospace',color:'red'}}>Nike Dri-FIT Trophy23
 Training Shorts</h5>
        <button type="button"  class="btn btn-primary">BUY NOW</button>     

      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Kids