import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from "../component/atoms/text";
import AtomButton from "../component/atoms/button";
import OrganismNav from "../component/organisms/navbar";
import { Form, Button,  } from "react-bootstrap"

export default function billing_page(){
    return(
        <>
        <OrganismNav />
        <center>
            <div className="row container">
                <div className="col-7">
                    <div className="row container text-left mt-5">
                        <div className="col">
                            <AtomText value="Billing Info" size="36px" weight="700" />
                            <AtomText value="Invoice : 13.04.2020.1" size="24px" weight="400" color="#646464" />
                        </div>
                    </div>
                    <div className="row container">
                        <div className="col text-left mr-2">
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="formPhoneNum">
                                    <Form.Label>Nomor Telepon</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="col text-left ml-2">
                            <Form>
                                <Form.Group controlId="formEmail">
                                    <Form.Label >Email</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="formInfo">
                                    <Form.Label>Keterangan</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="row container text-left">
                        <div className="col mt-3">
                            <Form>
                                <Form.Group controlId="formEmail">
                                    <Form.Label >Alamat</Form.Label>
                                    <Form.Control type="text" as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="col-3 mb-5">
                    <div className="billRightContainer text-left my-5 p-3">
                        <AtomText value="Billing Info" size="24px" weight="700" />
                        <AtomText value="Lorevial #A1294" size="16px" margin="5px 0px 0px 0px"/>
                        <AtomText value="$50.00 x 1" size="14px" />
                        <AtomText value="Lorevial #A1294" size="16px" margin="5px 0px 0px 0px"/>
                        <AtomText value="$140.00 x 10" size="14px" />
                        <AtomText value="Lorevial #A1294" size="16px" margin="5px 0px 0px 0px"/>
                        <AtomText className="mb-5" value="$350.00 x 5" size="14px" />
                        <div className="row g-2 mt-5">
                            <div className="col text-left">
                                <AtomText value="Total Price:" />
                            </div>
                            <div className="col text-right">
                                <AtomText value="$540.00" weight="700"/>
                            </div>
                        </div>
                    </div>
                    <Button style={{background:'#0086CF', width:'245px'}} type="submit">
                        Pay
                    </Button>
                </div>
            </div>
        </center>
        </>
    );
}