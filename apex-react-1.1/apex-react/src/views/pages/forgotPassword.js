// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Input, Form, FormGroup, Button, Card, CardBody, CardFooter } from "reactstrap";

class ForgotPassword extends Component {
  state = {
    email:''
  }

  emailChange = e =>{
    this.setState({email:e.target.value})
  }

  postData =() => {
            console.log("AA")
            fetch('https://yourqr.today/api/v1/user.forgot_password', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({c_email:this.state.email
                                    })
            }).then((res) => res.json())
            .then((data) => console.log(data)
          )

}


  render(){
   return (
      <div className="container">
         <Row className="full-height-vh">
            <Col xs="12" className="d-flex align-items-center justify-content-center">
               <Card className="gradient-indigo-purple text-center width-400">
                  <CardBody>
                     <div className="text-center">
                        <h4 className="text-uppercase text-bold-400 white py-4">Forgot Password</h4>
                     </div>
                     <Form className="pt-2">
                        <FormGroup>
                           <Col md="12">
                              <Input
                                 type="email"
                                 className="form-control"
                                 name="inputEmail"
                                 id="inputEmail"
                                 placeholder="Your Email Address"
                                 value = {this.state.email}
                                 onChange = {this.emailChange}
                              />
                           </Col>
                        </FormGroup>
                        <FormGroup className="pt-2">
                           <Col md="12">
                              <div className="text-center mt-3">
                                 <Button color="danger" block onClick = {this.postData}>
                                    Submit
                                 </Button>
                                 <Button color="secondary" block>
                                    Cancel
                                 </Button>
                              </div>
                           </Col>
                        </FormGroup>
                     </Form>
                  </CardBody>
                  <CardFooter>
                     <div className="float-left white">
                        <NavLink exact className="text-white" to="/pages/login">
                           Login
                        </NavLink>
                     </div>
                     <div className="float-right white">
                        <NavLink exact className="text-white" to="/pages/register">
                           Register Now
                        </NavLink>
                     </div>
                  </CardFooter>
               </Card>
            </Col>
         </Row>
      </div>
   );
 }
};

export default ForgotPassword;
