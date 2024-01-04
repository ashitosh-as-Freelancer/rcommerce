import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./minicart.css";
import { useMyContext } from "./MyContext";
import { NavLink } from "react-router-dom";

function Minicart() {
  const { state, dispatch, decrementQuantity,addQuantity } = useMyContext();

  function handleAddQuantity(id) {
    addQuantity(id, true);
  }

  function handleDecrementQuantity(id) {
    decrementQuantity(id, true);
  }

  function handleCloseBtn() {
    dispatch({ type: "showMinicart", payload: { showMinicart: false } })
  }

  return (
    <>
      <Modal
        show={state.miniCartShow}
        className="minicart-modal"
        onHide={() =>
          dispatch({ type: "showMinicart", payload: { showMinicart: false } })
        }
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Cart Items
          </Modal.Title>
          <Button className="bg-black border-0" onClick={handleCloseBtn}>X</Button>
        </Modal.Header>
        <Modal.Body>
          {state.items.map((item) => {
            return (
              <div key={item.id} className="row mb-2">
                <div className="mb-1 col-6 mb-3">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <div className="col-6 ps-0">
                  <p className="mb-1">{item.name}</p>
                  <p className="mb-1"> {`$` + item.price}</p>
                  <div className="col-12 d-flex">
                    <Button variant="dark border-0 " onClick={()=>handleDecrementQuantity(item.id)} className="col-3">
                      -
                    </Button>
                    <p className="col-3 mb-0 text-center mt-1">{item.qty}</p>
                    <Button variant="dark border-0" onClick={()=> handleAddQuantity(item.id)} className="col-3">
                      +
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <div>
            Cart Total : {state.cartTotal}
          </div>
          <NavLink to="/Cart" className='btn w-100' style={{backgroundColor: "#212529", color: "#fff"}}>Go To Cart</NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Minicart;
