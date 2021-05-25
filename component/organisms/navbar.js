import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import Link from 'next/link'

export default function navbar(){
    

    return(
        <Navbar style={{background:"#0086CF"}}>
            <Navbar.Brand>
                <Link href="/">
                    <img src="assets/logo.svg"></img>
                </Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="text-light" href="#home">Trends</Nav.Link>
                <Nav.Link className="text-light" href="#features">Explore</Nav.Link>
                <Nav.Link className="text-light" href="#pricing">Collection</Nav.Link>    
                <Nav.Link className="text-light" href="#home">About Us</Nav.Link>
            </Nav>
            <Form inline>
                <Link href="/billing_page">
                    <img style={{cursor:'pointer'}} className="mr-4" src="assets/cart.svg"></img>
                </Link>
                <Link href="/signUp_page">
                    <img style={{cursor:'pointer'}} className="mr-4" src="assets/prof_icon.svg"></img>
                </Link>
            </Form>
        </Navbar>
    );
}