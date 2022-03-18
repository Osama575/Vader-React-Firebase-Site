import React from 'react'
import { Container, Form, Button} from 'react-bootstrap';
import {db} from "../firebase";
 import {useState} from 'react';

const Newsletter = () => {

 const [Email, setEmail] = useState("");

 const handleSubmit = (e) => {
     e.preventDefault();

     db.collection("SurveyResponses").add({
         email:Email,
     })
     .then(() => {
        console.log("Successfully Submitted");
     })
     .catch((error) => {
         console.log(error.message);
     });
    

     setEmail("");
 }; 

  return (
      <>
    <Container>
        <div className='newsWrap' id='contact'>
            <h2 className='newsText mt-3'>
            Do you want to be among the first users to get latest<br />
            updates on our Launch ?
            </h2>

            <div className='formWrap'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Your email" value = {Email} onChange={(e) => setEmail(e.target.value)} style={{background: "rgba(255, 255, 255, 0.8)", borderRadius:"7px", zIndex: "99 !important"}}/>
                    </Form.Group>

                        <center>
                            <Button className="newsBtn" type='submit'>
                              Subscribe
                            </Button>
                        </center>
                </Form>
            </div>
        
        </div>
    </Container>
      </>
  )
}

export default Newsletter