import { useEffect } from "react";
import { useMyContext } from "../components/MyContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Cart() {
  const { state, dispatch} = useMyContext();

  useEffect(()=> {
      dispatch({type: 'showMinicart', payload: {showMinicart: false}})
  },[])
  
  return (
    <Container className="text-white px-4">
      {state.items.length > 0 ? <div className="text-center" style={{fontSize: '40px', marginBottom: 30}}>Order Placed</div>: '' }
        {state.items.length > 0 ? <Row className="justify-content-center">
        <Col xs={12} lg={7} className="px-0 mb-2">
        <div className=" py-3 mb-2 d-flex flex-wrap" style={{borderTop: '1px solid #fff', borderBottom: '1px solid #fff',fontSize: '20px'}}>
            <div className="col-6">Cart Total :</div><div className="col-6 text-right">{'$' + state.cartTotal}</div>
        </div>

    </Col>
        <Col xs={12} lg={7} >
      {state.items.map((item) => {
          return (
              <div key={item.id} className="row mb-3 bg-black px-2 py-4 rounded">
                <div className="col-3">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    style={{ maxWidth: "100%" }}
                    className='rounded'
                    />
                </div>
                <div className="col-4">
                  <p className="mb-2">{item.name}</p>
                  <p className="mb-2"> {`$` + item.price}</p>
                </div>
              </div>
            );
        })}
    </Col>
   
        </Row> : ''}
        {state.items.length === 0 ? <div className="text-center" style={{fontSize: '30px'}}>Cart Is Empty</div>: ''}
    </Container>
  )
}
