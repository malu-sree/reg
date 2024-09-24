import { Col, Container, Row,Form } from "react-bootstrap";




function Register(){
    return(
        <>
        <Container>
            <Row className="justify-content-centre">
             <Col lg={12} xs={12} className="border shadow rounded p-2">
             <Form>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="enter your First name" >
                        
                    </Form.Control>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lname" placeholder="enter your  Last name" >
                        
                    </Form.Control>
                </Form.Group>
             </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Register