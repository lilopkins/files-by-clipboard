import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

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

  const download = () => {
    const sections = input.split(':')
    if (sections.length != 3) {
      alert('Invalid encoded data! Please try again.')
      return
    }

    const fileName = sections[0]
    const data = sections[1]
    const checksum = sections[2]

    if (checksum !== 'end') {
      alert('Corrupted encoded data! Please try again.')
      return
    }

    const file = new File([base64ToArrayBuffer(data) as BlobPart], fileName)

    const a = document.createElement('a')
    a.href = URL.createObjectURL(file)
    a.download = fileName
    a.click()
  }

  return (
    <Col>
      <h2>Decode</h2>
      <Form>
        <FloatingLabel label='Encoded File Data'>
          <Form.Control as='textarea' style={{ height: '200px' }} onChange={(e) => setInput(e.currentTarget.value)} />
        </FloatingLabel>
        <Button className='mt-2' type='submit' variant='primary' onClick={download}>Download</Button>
      </Form>
    </Col>
  )
}

export default Decode
