import React from 'react'
import './About.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';


function About() {
  return (
    <>
        <div className='p' style={{textAlign:'center'}}>
<h3 style={{color:'black'}}>Company</h3>
<h1 style={{fontSize:'600%'}}>WELCOME TO NIKE,INC </h1>
        </div>


        <Card className="bg-dark text-white">
      <Card.Img src="https://i.postimg.cc/c46Htsw0/ezgif-com-video-to-gif-4.gif" alt="Card image" />
     
    </Card>

    <div className='a' style={{textAlign:'center'}}>
<p style={{fontSize:'250%'}}>NIKE, Inc. is a team comprised of the <span style={{backgroundColor:'red'}}>Nike, Jordan and Converse</span> brands driven by a shared purpose to leave an enduring impact.</p>
        </div>

        <Card>
      <Card.Body style={{backgroundColor:'white',color:'black'}}><strong><h2>Who We Are.</h2></strong></Card.Body>
    </Card>



    <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://i.postimg.cc/Gpvt6TwF/nike-inc-swoosh-jordan-converse-logos.jpg' alt='...' />
      
    </MDBCard>




    <Card>
      <Card.Body style={{backgroundColor:'black',color:'white'}}><strong><h2>Leadership</h2></strong></Card.Body>
    </Card>



    <div class="card-group"style={{borderColor:'white'}}>
  <div class="card" style={{borderColor:'black',backgroundColor:'black'}}>
    <img src="https://i.postimg.cc/T3fWGc0k/nike-inc-leadership-phil-knight-0587-square.jpg" class="card-img-top" alt="Hollywood Sign on The Hill"/>
    <div class="card-body" style={{borderColor:'white'}}>
      <h3 class="card-title">
Philip H. Knight</h3>
      <p class="card-text">
      Chairman Emeritus
      </p>
     
    </div>
  </div>

  <div class="card" style={{borderColor:'black',backgroundColor:'black'}}>
    <img src="https://i.postimg.cc/fTwwRg40/nike-inc-leadership-mark-parker-0136-square.jpg" class="card-img-top" alt="Palm Springs Road"/>
    <div class="card-body">
      <h5 class="card-title">Mark Parker</h5>
      <p class="card-text">Executive Chairman</p>
    
    </div>
  </div>
  
  <div class="card" style={{borderColor:'black',backgroundColor:'black'}}>
    <img src="https://i.postimg.cc/15YL1WyS/nike-inc-leadership-john-donahoe-0264-square.jpg" class="card-img-top" alt="Los Angeles Skyscrapers"/>
    <div class="card-body">
      <h5 class="card-title">John Donahoe</h5>
      <p class="card-text">
      President & CEO
      </p>
    
    </div>
  </div>
  <div class="card" style={{borderColor:'black',backgroundColor:'black'}}>
    <img src="https://i.postimg.cc/TPj71Qvp/nike-inc-leadership-andy-campion-0174-square.jpg" class="card-img-top" alt="Los Angeles Skyscrapers"/>
    <div class="card-body">
      <h5 class="card-title">

Mar Strrel</h5>
      <p class="card-text">
      Chief Operating Officer
      </p>
   
    </div>
  </div>
  
</div>





<br></br>
<Card>
      <Card.Body style={{backgroundColor:'white',color:'red'}}><strong><h2>Headquarters</h2></strong></Card.Body>
    </Card>



<Row xs={1} md={2} className="" style={{backgroundColor:'white'}}>
        <Col >
          <Card style={{backgroundColor:'white'}}>
            <Card.Img variant="top" src="https://i.postimg.cc/4yXmZfbY/lebron-exterior-001.jpg" />
            <Card.Body>
              <Card.Title style={{color:'black'}}><h2>NIKE, Inc. World Headquarters</h2></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{backgroundColor:'white'}}>
            <Card.Img variant="top" src="https://i.postimg.cc/c15Sd1cP/nike-2022-company-hqs-ehq-001.jpg" />
            <Card.Body>
              <Card.Title style={{color:'black'}}><h2>NIKE, Inc. European Headquarters</h2></Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://i.postimg.cc/d3F4YyxG/Screenshot-2023-02-22-010330.jpg' alt='...' />
      
    </MDBCard>
    </>
  )
}

export default About