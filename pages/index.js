import AtomText from "../component/atoms/text";
import AtomButton from "../component/atoms/button";
import MoleculeProductList from "../component/molecules/product_list";
import OrganismNav from "../component/organisms/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import { product } from "../component/variables/product";
import { useRouter } from 'next/router'

export default function test() {
  const route = useRouter();

  return (
    <>
      <OrganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col text-left">
            <AtomText value="Peduli Digital Market" size="36px" weight="bold" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"/>
            <div className="row mt-5">
              <div className="col-5">
                <AtomButton
                  background="#0086CF"
                  value="Browse All Products"
                  color="#FFF"
                  border="none"
                  padding="10px 20px"
                  radius="10px"
                />
              </div>
              <div className="col">
                <AtomButton
                  background="#F0F0F0"
                  value="Follow This Board"
                  border="none"
                  padding="10px 20px"
                  radius="10px"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <img src="/assets/hero_right.svg" />
          </div>
        </div>
        <div
          className="mt-5 pt-5"
          style={{ width: "100%", height: "512px", background: "#F9F9F9" }}
        >
          <center>
            <div className="row container">
              <div className="col-12 text-left">
                <AtomText value="Forever bag" size="24px" weight="bold" />
              </div>
              {product.map((list_product, index) =>{
                return(
                  <>
                    <div className="col">
                      <MoleculeProductList
                        image={list_product.gambarBarang[0]}
                        name={list_product.namaBarang}
                        category={list_product.desc}
                        price={list_product.harga}
                        href="/product_page/[id]"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </center>
        </div>
      </center>
    </>
  );
}