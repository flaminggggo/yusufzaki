import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from "../component/atoms/text";
import { Form, Button,  } from "react-bootstrap";

export default function signUp_page(){
    return(
        <>
        <center>
            <div className="container mt-5 ctnMain">
                <div className="row">
                    <div className="col mt-5">
                        <img style={{height:'435px'}} src="/assets/bro_signup.svg"></img>
                        <AtomText value="Start your New Journey With Us" size="24px" weight="700" margin="50px 0px 0px 0px"/>
                        <AtomText value="Build your own shop using peduli digital Marketplace, you can sell all your favorite item and get easy money" color="#9D9D9D"/>
                    </div>
                    <div className="col m-auto text-left">
                    <AtomText value="Sign Up" weight="700" size="35px" />
                    <Form style={{width:'395px'}}>
                        <Form.Group controlId="formSignUpEmail">
                            <Form.Label style={{color:'#9D9D9D', fontSize:'18px'}}>Username / Email</Form.Label>
                            <Form.Control style={{height:'60px', borderRadius:'10px'}} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formSignUpPassword">
                            <Form.Label  style={{color:'#9D9D9D', fontSize:'18px'}}>Password</Form.Label>
                            <Form.Control style={{height:'60px', borderRadius:'10px'}} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formSignUpRePassword">
                            <Form.Label  style={{color:'#9D9D9D', fontSize:'18px'}}>Re-enter Password</Form.Label>
                            <Form.Control style={{height:'60px', borderRadius:'10px'}} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button style={{background:'#0086CF', color:'white', borderRadius:'10px', width:'395px', height:'50px', fontSize:'18px', marginBlock:'50px'}} type="submit">
                            Register
                        </Button>
                        <p style={{color:'#9D9D9D', fontSize:'18px'}}>Already have an account? <span style={{color:'#0086CF', fontSize:'18px'}}>Sign In</span></p>
                    </Form>
                    </div>
                </div>
            </div>
        </center>
        </>
    );
}