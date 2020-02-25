import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Pad = styled.div`
  display: inline-block;
  padding-left: 4px;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spin = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid #66666644;
  border-top: 2px solid #666;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

const Spinner = (props) => {
  return (
    <Spin />
  )
}

export default Spinner
