import React, { useState } from "react";
import Form from "./Form";
import ThankYou from "./ThankYou";

const Modal = ({ closeModel }) => {
  const [showThankyou, setShowThankyou] = useState(false);
  console.log(showThankyou);
  return (
    <>
      {!showThankyou ? (
        <Form setShowThankyou={setShowThankyou} closeModel={closeModel} />
      ) : (
        <ThankYou closeModel={closeModel} />
      )}
    </>
  );
};

export default Modal;
