import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Encode from './Encode'
import Decode from './Decode'

function App() {
  return (
    <Container className='my-3'>
      <h1>Files by Clipboard</h1>
      <p>Copy any file across systems that only allow transfer via clipbaord.</p>

      <hr />

      <Row>
        <Encode />
        <Decode />
      </Row>
    </Container>
  )
}

export default App
