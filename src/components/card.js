import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';


const Cards = ({ item, handleClick }) => {

  const { title, desc, price, img } = item;
  
  return (
    // <div className="cards">
    //   <div className="image_box">
    //     <img src={img} alt="" />
    //   </div>
    //   <div className="details">
    //     <p>{title}</p>
    //     <p>{author}</p>
    //     <p>Price - {price}Rs</p>
    //     <button onClick={() => handleClick(item)}>Add to Cart</button>
    //   </div>
    // </div>




    <Card className="g" >
    <Card.Img style={{height:"550px",width:'400px'}} variant="top" src={img} />
    <Card.Body style={{backgroundColor:'black'}}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
      <p>{desc}</p>
     <p>Price - {price} Rs</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer  style={{backgroundColor:'black',textAlign:'center'}}>
    <div className="App" style={{height:'50px'}}>
    <button onClick={() => handleClick(item)} className="click">Add to Cart</button>
    </div>
    </Card.Footer>
  </Card>







  );
 
};

export default Cards;