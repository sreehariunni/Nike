import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'






function Login() {
  var x = localStorage.getItem("uname");
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [store, setStore] = useState(true);

  function handleLogin(e) {
    
    e.preventDefault();
    let pass = localStorage
      .getItem("KPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("KEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
       

      setStore(!store);
      setFlag(false);
    }
  }

  return (




    <>
<div className="co" style={{height:800,padding:100,overflow:'hidden' }}>
      {store? (

        <Form className="container" style={{  width:700,marginLeft:330,  border: '4px  black ',padding:'20px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}  onSubmit={handleLogin}>
            <h1 style={{color:'white',textAlign:'center'}}>LOGIN</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"    onChange={(event) => setPasswordlog(event.target.value)}/>
        </Form.Group>
        
         
     
        <Button style={{ height:45,color:"black",backgroundColor:"green",borderRadius:10,boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}} variant="primary" type="submit">
          Login
        </Button>

        <br></br>
        <br></br>
          <p> Don't Have An Account? <a href="/register"> Register</a></p>
        

        {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
      </Form>





      ) : (
        <Alert color="primary" variant="success"  style={{backgroundColor:"transparent",border:"none"}}>
          <p className="p2" style={{color:'red'}}>  WELCOME , <span style={{color:'yellow'}}>{x} </span></p> <br></br>
          
            <button style={{backgroundColor:"red",border:"none",fontSize:35,height:100,width:100,borderRadius:90,marginLeft:579}} ><a style={{textDecoration:"none"}} href="/login"><i class="fa-solid fa-forward"></i> </a>
            </button> <br></br>
             {/* <img style={{height:400,marginLeft:395}} src="https://i.postimg.cc/9FkwNG2j/nike-4-logo-png-transparent.png"/> */}
            </Alert>
       
      )}
      </div>
    </>
  );
}

export default Login;