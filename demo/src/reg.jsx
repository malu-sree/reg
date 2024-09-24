import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Register() {
const[firstName,setfirstName]= useState('');
const[lastName,setlastName]= useState('');
const[address,setaddress]= useState('');

const handleSubmit = (e) => {
    e.preventDefault();  
    const userData = {
        firstName: firstName,
        lastName: lastName,
       address:address
    };
    console.log(userData); 
    alert('Registration successful!');
};

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={6} xs={12} className="border shadow rounded p-2">
         
            <Form onSubmit={handleSubmit}>
            <h1 className="text-center mb-4">Register</h1>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your first name"
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </Form.Group>
   {firstName}
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Enter your last name"
                  onChange={(e) => setlastName(e.target.value)}

                />
              </Form.Group>
              {lastName}
             <Form.Group className="mb-3">
                <Form.Label htmlFor="male">Male</Form.Label>
                <Form.Check 
                inline
                type="radio"
                name="gender"
                value="male"
                id="male"></Form.Check>

<Form.Label htmlFor="female">Female</Form.Label>

                <Form.Check
                inline 
                type="radio"
                name="gender"
                value="female"
                id="female"></Form.Check>
             </Form.Group>

              <Form.Group className="mb-3" controlId="formSelectState">
                <Form.Select>
                    <option value="">Select State</option>
                    <option value="kerala">Kerala</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="karnataka">Karnataka</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" name="address" style={{height:'140px'}}
                onChange={(e) => setaddress(e.target.value)}>
                     
                </Form.Control>

              </Form.Group>

<br></br>
              <Button variant="primary" type="submit" >
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
