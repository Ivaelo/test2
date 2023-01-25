import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from 'axios';
function Register(props) {


    const [name ,setName] = useState();
    const [password ,setPassword] = useState();
 
    function handleSubmit(event){
      event.preventDefault();

      console.log("alabala2");
      console.log(name);
      axios
        .post('http://localhost:3000/register',{
          name: name
        })
        .then(res => console.log(res))
        .catch(err=> console.error(err));
    }
    return (
        <div>
          <Container  >
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col md={8} lg={6} xs={12}>
                <div className="border border-3 border-primary"></div>
                <Card className="shadow">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <h2 className="fw-bold mb-2 text-uppercase ">Register</h2>
                      <p className=" mb-5">Please enter your name</p>
                      <div className="mb-3">
                        <Form>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">
                              User name 
                            </Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" onChange={e => setName(e.target.value)} />
                          </Form.Group>
    
                          
                  
                          <div className="d-grid">
                            <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>
                              register
                            </Button>
                          </div>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0  text-center">
                            Don't have an account?{" "}
                            <a href="{''}" className="text-primary fw-bold">
                              Sign Up
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
}
export default Register;