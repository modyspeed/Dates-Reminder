import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

export const Title = (props) => {
  return (
    <Container>
    <Row className=' m-1 fs-2'>
      <Col>لديك {props.data.length} مواعيد اليوم</Col>
    </Row>
  </Container>
  )
}
