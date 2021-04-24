import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from 'react-bootstrap'
import AtmText from '../atoms/text'

export default function hero(){
    return(
        <Row className="justify-content-md-center text-left row mt-5 ml-5">
            <Col sm={6}>
                <AtmText value="Peduli Digital Market" weight="700" height="39px" size="56px" margin="10px 0px 20px 0px"/>
                <AtmText value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"  weight="400" height="30px" size="14px" />
                <Row>
                    <Col sm={6}>
                        <Button style={{background:"#0086CF"}}>Browse All Products  ></Button>{' '}
                    </Col>
                    <Col sm={6}>
                        <Button style={{background:"#F0F0F0", borderColor:"#F0F0F0", color:"black" }}>Follow This Board  ></Button>{' '}
                    </Col>
                </Row>
            </Col>
            <Col sm={6}>
                <img src="/assets/hero_right.svg"></img>
            </Col>
        </Row>
    );
}