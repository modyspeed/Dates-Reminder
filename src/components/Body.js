import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Body = (props) => {
  return (
    <Container className="box ">
      {props.data.length ? (
        props.data.map((item) => {
          return (
            <Row className=" m-2 fs-2  py-1">
              <Col className="  d-flex align-items-center border-bottom  my-2 pb-md-4">
                <img className="image" src={item.avatar} alt="pic" />
                <div className="info d-inline-block mx-4 ">
                  <p>{item.name}</p>
                  <p> {item.time} </p>
                </div>
              </Col>
            </Row>
          );
        })
      ) : (
        <h2 className="text-center ">لا يوجد مواعيد اليوم</h2>
      )}
    </Container>
  );
};
