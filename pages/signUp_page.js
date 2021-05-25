import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from "../component/atoms/text";
import { Form, Button,  } from "react-bootstrap";
import Link from 'next/link'
import { useState } from 'react'
import { user } from '../component/variables/user';
import { fetch_data } from '../component/variables/api'

export default function signUp_page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [brdrColor, setBrdrColor] = useState('');

    const handleUsernameChange = e =>{
        setUsername(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleConfPasswordChange = e =>{
        setConfPassword(e.target.value);
    }

    const handleRegister = () =>{
        if(password == confPassword){
            let json = {
                "action" : "save",
                "table" : "tx_hdr_user",
                "data" : [
                    {
                        "user_name":username,
                        "user_password":password
                    }
                ]
              }
            fetch_data("POST", "http://localhost/samson/data", json).then(function (result) {
                console.log(result);
              });
            // let check = user.filter(data => (data.username == username && data.password == password))
            // setBrdrColor('green');
            // if(!check.length){
            //     let newuser = {
            //         username:username,
            //         password:password
            //     }
            //     alert("Register success");
            //     user.push(newuser);
            //     console.log(user);
            // } else {
            //     alert("User already registered");
            //     console.log(user);
            // }
        } else{
            alert("Passwords doesn't match")
            setBrdrColor('red');
        }
    };

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
                            <Form.Control style={{height:'60px', borderRadius:'10px'}} type="text" placeholder="Enter username/email" onChange={handleUsernameChange}/>
                        </Form.Group>
                        <Form.Group controlId="formSignUpPassword">
                            <Form.Label  style={{color:'#9D9D9D', fontSize:'18px'}}>Password</Form.Label>
                            <Form.Control style={{height:'60px', borderRadius:'10px'}} type="password" placeholder="Password" onChange={handlePasswordChange}/>
                        </Form.Group>
                        <Form.Group controlId="formSignUpRePassword">
                            <Form.Label  style={{color:'#9D9D9D', fontSize:'18px'}}>Re-enter Password</Form.Label>
                            <Form.Control style={{height:'60px', borderRadius:'10px', borderColor:`${brdrColor}`}} type="password" placeholder="Password"  onChange={handleConfPasswordChange}/>
                        </Form.Group>
                        <Button style={{background:'#0086CF', color:'white', borderRadius:'10px', width:'395px', height:'50px', fontSize:'18px', marginBlock:'50px'}} onClick={handleRegister}>
                            Register
                        </Button>
                        <p style={{color:'#9D9D9D', fontSize:'18px'}}>Already have an account? <Link href="/login_page"><span style={{color:'#0086CF', fontSize:'18px', cursor:'pointer'}}>Sign In</span></Link></p>
                    </Form>
                    </div>
                </div>
            </div>
        </center>
        </>
    );
}