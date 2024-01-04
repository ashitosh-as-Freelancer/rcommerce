import productData from "../data";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Product from "../components/Product";
import { useEffect } from "react";
import { useMyContext } from "../components/MyContext";

export default function Home() {
  const {dispatch} = useMyContext();

  useEffect(()=> {
    dispatch({type: 'ClearCart'});
  },[])

  return (
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        {productData.map((product) => {
          return (
            <Product
              key={product.id}
              productName={product.name}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          );
        })}
      </Row>
    </Container>
  );
}
