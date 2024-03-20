import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import md5 from 'md5'
import { gunzipSync } from 'fflate'

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}

function Decode() {
  const [input, setInput] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const download = () => {
    setStatus('Processing...')
    const sections = input.split(':')
    if (sections.length != 3) {
      setStatus('Invalid encoded data!')
      return
    }

    const fileName = sections[0]
    const base64Data = sections[1]
    const calculatedChecksum = md5(base64Data)
    const checksum = sections[2]

    if (checksum !== calculatedChecksum) {
      setStatus('Corrupted encoded data!')
      return
    }

    const compressedBuffer = base64ToArrayBuffer(base64Data)
    const buffer = gunzipSync(new Uint8Array(compressedBuffer))
    const file = new File([buffer as BlobPart], fileName)
    window.open(URL.createObjectURL(file))
    setStatus('')
  }

  return (
    <Col>
      <h2>Decode</h2>
      <FloatingLabel label='Encoded File Data'>
        <Form.Control as='textarea' style={{ height: '200px' }} onChange={(e) => setInput(e.currentTarget.value)} />
      </FloatingLabel>
      <Button className='mt-2' variant='primary' onClick={download}>Download</Button>
      <p>{status}&nbsp;</p>
    </Col>
  )
}

export default Decode
