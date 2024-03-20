import React, { ChangeEvent, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

import md5 from 'md5'
import { gzipSync } from 'fflate'

const NO_DATA = 'No file selected'
const PROCESSING = 'Processing file...'

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

function Encode() {
  const [encodedData, setEncodedData] = useState<string>(NO_DATA)
  const [flash, _setFlash] = useState<string>()

  const encodeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    setEncodedData(PROCESSING)
    const files = e.currentTarget.files
    if (files === null) {
      setEncodedData(NO_DATA)
      return
    }

    const file = files[0]
    const buffer = await file.arrayBuffer()
    const compressedBuffer = gzipSync(new Uint8Array(buffer), { filename: file.name, mtime: new Date() })
    const b64encoded = arrayBufferToBase64(compressedBuffer)
    const checksum = md5(b64encoded)
    setEncodedData(`${file.name.replaceAll(':', '_')}:${b64encoded}:${checksum}`)
  }

  const setFlash = (flash: string) => {
    _setFlash(flash)
    setTimeout(() => _setFlash(undefined), 500)
  }

  const copy = async (val: string) => {
    await navigator.clipboard.writeText(val)
    setFlash('Copied!')
  }

  return (
    <Col>
      <h2>Encode</h2>
      <Form.Control type='file' onChange={(e) => encodeFile(e as ChangeEvent<HTMLInputElement>)} />
      <FloatingLabel className='mt-2' label='Encoded File Data'>
        <Form.Control as='textarea' readOnly={true} style={{ height: '200px' }} value={encodedData}></Form.Control>
      </FloatingLabel>
      <Button className='mt-2' variant='primary' onClick={() => copy(encodedData)}>Copy</Button>
      <p>{flash}&nbsp;</p>
    </Col>
  )
}

export default Encode
