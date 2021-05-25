import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from "../../component/atoms/text";
import AtomButton from "../../component/atoms/button";
import OrganismNav from "../../component/organisms/navbar";
import { product } from '../../component/variables/product';
import { useRouter } from 'next/router';

export default function product_page(){
    const router = useRouter();
    const list_product = product[router.query.id];
    return(
        <>
        <OrganismNav />
        <center className="mt-20">
            <div className="row container mt-5">
                <div className="col">
                    <img className="ctnGambar" src={list_product ? list_product.gambarBarang[0] : "/products/prod_big.png"} ></img>
                    <div className="row">
                        <img className="col ctnGambarKecil" src={list_product ? list_product.gambarBarang[1] : "/products/small1.png"}></img>
                        <img className="col ctnGambarKecil" src={list_product ? list_product.gambarBarang[2] : "/products/small2.jpg"}></img>
                        <img className="col ctnGambarKecil" src={list_product ? list_product.gambarBarang[3] :"/products/small3.jpg"}></img>
                    </div>
                </div>
                <div className="col text-left ml-5">
                    <AtomText value={list_product ? list_product.namaBarang : 'Judul'} size='36px' weight='700'></AtomText>
                    <AtomText value={`Stock : ${list_product ? list_product.stock : '0'}`} size='18px' color="#9D9D9D"></AtomText>
                    <AtomText value={list_product ? list_product.harga : '$0'} size="36px" weight="700" />
                    <AtomText value={list_product ? list_product.desc : '-'} size='14px' weight='400' margin='0px 0px 85px 0px'></AtomText>
                    <AtomButton value="Add to cart" background="#0086CF" color="white" border="1px solid #0086CF" radius="10px" padding="7px 12px 7px 12px"></AtomButton>
                </div>
            </div>
        </center>
        </>
    );
}