import React from "react";
import { Col, Container, Row } from "react-bootstrap";


export const Footer = (props) => {
  return (
    <Container>
      <Row className="  my-2">
        <Col className="d-flex justify-content-between">
          <button className="btn btn-dark w-25 p-3 " onClick={props.clearData}>مسح الكل</button>
          <button className="btn btn-dark w-25 p-3 " onClick={props.showData}>عرض المواعيد</button>
        </Col>
      </Row>
    </Container>
  );
};
