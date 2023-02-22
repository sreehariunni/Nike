import React from 'react'
import './Frontpage.css'
import Carousel from 'react-bootstrap/Carousel';
import './Frontpage.html'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';



function Frontpage() {
  return (
    <><h1 style={{textAlign:'center', color:'red', fontFamily:'cursive'}}>LATEST ARIVALS</h1> <br/>

   
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/rsBJDwqK/men-s-shoes-clothing-accessories.jpg"

          alt="First slide"
        />
        <Carousel.Caption>
          <h3>JORDAN X PARIS SAINT-GERMAIN</h3>
          <p>The new Jordan x Paris Saint-Germain collection draws on the light that paris shines on the world stage .
             </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/j2BbCPWP/becc0069-c25e-4b77-8645-eac8d5ce57b0.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>LERBRON X LIVERPPOL FC</h3>
          <p>One of the basketball's biggest stars joins forces with the world's greatest football family.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/5ySrWzBf/ad4c2b50-6a86-4f41-b719-67dbb6a14eca.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>NIKE RUNNING</h3>
          <p>
            Style that flex with YOU
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Card className="bg-dark text-white">
      <Card.Img src="https://i.postimg.cc/9ft1M78S/ezgif-com-video-to-gif.gif"  alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title  style={{color:'black', fontFamily:'sans-serif'}}><h1><b>BOLD BEGINNINGS</b></h1></Card.Title>
              </Card.ImgOverlay>
    </Card>
    



    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://i.postimg.cc/vBVM2KfR/d94bfa7e-9357-406a-a124-1940712dfa0b.webp'
            alt='...'
            position='top'
          />
      <MDBCardBody>
         
            <MDBBtn href='./mens' className='container'>Men's</MDBBtn>
          </MDBCardBody>

          
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://i.postimg.cc/kX8bVxMw/dc62b322-5c3f-4508-b21c-950683ed460f.webp'
            alt='...'
            position='top'
          />
            <MDBCardBody>
            
            <MDBBtn href='./womens' className='container'>Women's</MDBBtn>
          </MDBCardBody>
         
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://i.postimg.cc/W4f3Y3bh/58359474-a0de-4329-959c-55d1652d0912.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
           
            <MDBBtn  href='./kids'className='container'>Kid's</MDBBtn>
          </MDBCardBody>
          
       
        </MDBCard>
      </MDBCol>
    </MDBRow>




    <Card>
        <Card.Img variant="top" src="https://i.postimg.cc/YCk3vwj0/ezgif-com-video-to-gif-1.gif" />
        <Card.Body>
          <Card.Text style={{backgroundColor:"red",textAlign:"center"}}>
           AIR JORDAN
          </Card.Text>
        </Card.Body>
      </Card>
      <br />


      
     
{/* ------------------------------------------------------------------------------------------------------------------------- */}

      <Card className="bg-dark text-white">
      <Card.Img src="https://i.postimg.cc/5yHWZC8H/fa4596ad9a9d39901eeb455ed4f74e44.jpg"  alt="Card image" />
     
    </Card>

    


    
    </>
  )
}

export default Frontpage
