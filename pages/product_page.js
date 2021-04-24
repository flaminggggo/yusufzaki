import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from "../component/atoms/text";
import AtomButton from "../component/atoms/button";
import OrganismNav from "../component/organisms/navbar";

export default function product_page(){
    return(
        <>
        <OrganismNav />
        <center className="mt-20">
            <div className="row container mt-5">
                <div className="col">
                    <img className="containerGambar" src="/products/prod_big.jpg"></img>
                    <div className="row">
                        <div className="col containerGambarKecil">
                            <img src="/products/small1.jpg"></img>
                        </div>
                        <div className="col containerGambarKecil">
                            <img src="/products/small2.jpg"></img>
                        </div>
                        <div className="col containerGambarKecil">
                            <img src="/products/small3.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="col text-left ml-5">
                    <AtomText value='Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment' size='36px' weight='700'></AtomText>
                    <AtomText value='Stock: 50' size='18px' weight='400' color="#9D9D9D"></AtomText>
                    <AtomText value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" size='14px' weight='400' margin='0px 0px 50px 0px'></AtomText>
                    <AtomButton value="Add to cart" background="#0086CF" color="white" border="1px solid #0086CF" radius="10px" padding="7px 12px 7px 12px"></AtomButton>
                </div>
            </div>
        </center>
        </>
    );
}