import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

export default function navbar(){
    return(
        <Navbar style={{background:"#0086CF"}}>
            <Navbar.Brand href="#home">
                <img src="assets/logo.svg"></img>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="text-light" href="#home">Trends</Nav.Link>
                <Nav.Link className="text-light" href="#features">Explore</Nav.Link>
                <Nav.Link className="text-light" href="#pricing">Collection</Nav.Link>    
                <Nav.Link className="text-light" href="#home">About Us</Nav.Link>
            </Nav>
            <Form inline>
                <img className="mr-4" src="assets/cart.svg"></img>
                <img className="mr-4" src="assets/prof_icon.svg"></img>
            </Form>
        </Navbar>
    );
}