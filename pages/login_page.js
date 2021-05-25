import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from "../component/atoms/text";
import { Form, Button,  } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { user } from '../component/variables/user';
import { route } from 'next/dist/next-server/server/router';
import { fetch_data } from '../component/variables/api'

export default function login_page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleUsernameChange = e =>{
        setUsername(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleLogin = () =>{
        // let check = user.filter(data => (data.username == username && data.password == password));
        let json = {
            "action" : "login",
            "table" : "tx_hdr_user",
            "username" : username,
            "password" : password
        }
        fetch_data("POST", "http://localhost/samson/auth", json).then(function (result) {
            if (result.success) {
                alert(result.message);
                router.push("/");
                localStorage.setItem("user_id", JSON.stringify(result.data));
            } else {
                alert(result.message);
            }
              });
        
    };

    return(
        <>
        <center>
            <div className="container mt-5 ctnMain">
                <div className="row">
                    <div className="col mt-5">
                        <Link href="/">
                            <img style={{height:'435px'}} src="/assets/bro.svg"></img>
                        </Link>
                        <AtomText value="Start your New Journey With Us" size="24px" weight="700" margin="50px 0px 0px 0px"/>
                        <AtomText value="Build your own shop using peduli digital Marketplace, you can sell all your favorite item and get easy money" color="#9D9D9D"/>
                    </div>
                    <div className="col m-auto text-left">
                    <AtomText value="Sign In" weight="700" size="35px" />
                    <Form style={{width:'395px'}}>
                        <Form.Group controlId="formLoginEmail">
                            <Form.Label style={{color:'#9D9D9D', fontSize:'18px'}}>Username / Email</Form.Label>
                            <Form.Control style={{height:'60px', borderRadius:'10px'}} type="text" placeholder="Enter email" onChange={handleUsernameChange}/>
                        </Form.Group>
                        <Form.Group controlId="formLoginPassword">
                            <Form.Label  style={{color:'#9D9D9D', fontSize:'18px'}}>Password</Form.Label>
                            <Form.Control style={{height:'60px', borderRadius:'10px'}} type="password" placeholder="Password" onChange={handlePasswordChange} />
                        </Form.Group>
                        <Form.Group controlId="formLoginCheckbox">
                            <Form.Check style={{color:'#9D9D9D'}} type="checkbox" label="Remember Me" />
                            <Button style={{background:'#0086CF', color:'white', borderRadius:'10px', width:'395px', height:'50px', fontSize:'18px'}} onClick={handleLogin}>
                            Login
                            </Button>
                        </Form.Group>
                        
                    </Form>
                    <p style={{color:'#9D9D9D', fontSize:'18px', marginTop:'100px'}}>Don't have an account? <Link href="/signUp_page"><span style={{color:'#0086CF', fontSize:'18px', cursor:'pointer'}}>Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
        </center>
        </>
    );
}