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
      <p>
        Copy any file across restrictive systems that only allow transfer via clipboard.
        View the <a rel='noreferrer' href='https://github.com/lilopkins/files-by-clipboard' target='_blank'>source code on GitHub</a>.
      </p>

      <hr />

      <Row>
        <Encode />
        <Decode />
      </Row>
    </Container>
  )
}

export default App
