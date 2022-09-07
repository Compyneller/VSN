import React, { useState } from "react";
import BuySellModal from "../../Modal/BuySellModal";
import "./BuySell.scss";
const BuySell = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="rainbow" onClick={() => setModalShow(true)}>
        Buy & Sell
      </div>
      <BuySellModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default BuySell;
