import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import { useMyContext } from './MyContext';

export default function Product({ productName, price, image, id }) {
  const { src, alt } = image;
  const {addCart} = useMyContext();

  const handleAddToBag =(id)=> {
    addCart(id);
  }

  return (
      <Col xs={6} sm={4} md={3} xl={2}>
        <Card className="border-0 mb-4" style={{backgroundColor: '#000'}}>
          <Card.Img variant="top" src={src} alt={alt} />
          <Card.Body>
            <Card.Title className="mb-3 text-white">{productName} {'$' + price}</Card.Title>
            <Button variant="dark" className="w-100" onClick={()=> handleAddToBag(id)}>Add to bag</Button>
          </Card.Body>
        </Card>
      </Col>
  );
}
