import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./Modal.css";
import axios from "axios";
const UploadBackAadharImage = () => {
  const [backAadhar, setBackAadhar] = useState("");
  const [backAadharPrev, setBackAadharPrev] = useState("");
  const uploadBackAadhar = async (e) => {
    const d = new Date();
    setBackAadhar(e.target.files[0]);

    let formData = new FormData();
    formData.append("file", backAadhar);
    console.log("Back", formData);
    const response = await axios.post(
      "https://34.207.41.229:4100/vsnSellSoutions/uploadIds",
      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setBackAadharPrev(URL.createObjectURL(e.target.files[0]));
    console.log(response);
  };

  return (
    <div className="modalContainer">
      <Container>
        <Row>
          <div className="col-6">
            <div className="form-group mt-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Back Side of Aadhar</Form.Label>

                <input
                  type="file"
                  required
                  className="m-auto form-control"
                  accept="image/png, image/jpeg"
                  id="inputGroupFile01"
                  onChange={(e) => uploadBackAadhar(e)}
                />
              </Form.Group>
            </div>
          </div>
          <div className="col-6">
            <img
              className="w-100"
              src={
                backAadharPrev === ""
                  ? "https://img.icons8.com/external-tone-royyan-wijaya/344/external-card-ecommerce-bram-bram-tone-royyan-wijaya-2.png"
                  : backAadharPrev
              }
              alt=""
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default UploadBackAadharImage;
