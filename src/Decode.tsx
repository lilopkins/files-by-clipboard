import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

function Decode() {
  return (
    <Col>
      <h2>Decode</h2>
      <Form>
        <FloatingLabel label='Encoded File Data'>
          <Form.Control as='textarea' style={{ height: '200px' }} />
        </FloatingLabel>
        <Button className='mt-2' type='submit' variant='primary'>Download</Button>
      </Form>
    </Col>
  )
}

export default Decode
