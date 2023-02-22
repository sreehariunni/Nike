import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography }
 from 'mdb-react-ui-kit';
function Contact() {
  return (
    <>
    <div>

    <MDBContainer className="py-5" style={{ maxWidth: '900px' }} >
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className="my-4 shadow-3">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-xl-block bg-image">
                <MDBCardImage style={{marginTop:1}} src="https://i.postimg.cc/W4Gm8Kh7/1107582.webp" alt="Sample photo"  />
                <div className='mask' style={{ backgroundColor: 'black' }}>
                  <div className="justify-content-center align-items-center">
                    <div className="text-center" style={{ marginTop: '220px' }}>
                     
                     

                      
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="p-md-5 text-black">
                  <MDBTypography tag="h3" className="mb-4 text-uppercase " style={{color:'red'}}>Contact Info</MDBTypography>

                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput  placeholder='First name' type='text' size="" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <MDBInput placeholder='Last name' type='text' size="" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput placeholder='Email' type='text' className="mb-4" size="" />
                  <MDBInput placeholder='Enter the Message' type='text' className="mb-4" size="" />

                  <MDBBtn size="" className="ms-2" style={{backgroundColor: 'black'}}>Submit</MDBBtn>

                  

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        
        
        </div>
        </>
  )
}

export default Contact