import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

function Encode() {
  return (
    <Col>
      <h2>Encode</h2>
      <Form.Control type='file' />
      <FloatingLabel className='mt-2' label='Encoded File Data'>
        <Form.Control as='textarea' readOnly={true} style={{ height: '200px' }} />
      </FloatingLabel>
      <Button className='mt-2' variant='primary'>Copy</Button>
      <p>Copied!</p>
    </Col>
  )
}

export default Encode
