import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import axios from "axios";
import UploadBackAadharImage from "./UploadBackAadharImage";
const UploadFrontAadharImage = () => {
  const [frontAadhar, setFrontAadhar] = useState("");
  const [frontAadharPrev, setFrontAadharPrev] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const uploadFrontAadhar = async (e) => {
    const d = new Date();
    setFrontAadhar(e.target.files[0]);

    let formData = new FormData();
    formData.append("file", frontAadhar);
    console.log("front", formData);
    const response = await axios.post(
      "https://34.207.41.229:4100/vsnSellSoutions/uploadIds",
      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setFrontAadharPrev(URL.createObjectURL(e.target.files[0]));
    if (response.data.success) {
      setOpenModal(true);
    }
  };

  return (
    <>
      <div className="modalContainer">
        <Container>
          <Row>
            <div className="col-6">
              <div className="form-group mt-3">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Front Side of Aadhar</Form.Label>

                  <input
                    type="file"
                    required
                    className="m-auto form-control"
                    accept="image/png, image/jpeg"
                    id="inputGroupFile01"
                    onChange={(e) => uploadFrontAadhar(e)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-6">
              <img
                className="w-100"
                src={
                  frontAadharPrev === ""
                    ? "https://img.icons8.com/external-tone-royyan-wijaya/344/external-card-ecommerce-bram-bram-tone-royyan-wijaya-2.png"
                    : frontAadharPrev
                }
                alt=""
              />
            </div>
          </Row>
        </Container>
      </div>
      {openModal ? <UploadBackAadharImage /> : ""}
    </>
  );
};

export default UploadFrontAadharImage;
