import React from 'react'
import styled, { keyframes } from 'styled-components'

const Pad = styled.span`
  padding-left: ${({ padLeft }) => padLeft ? 4 : 0}px;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Icon = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 2px solid #66666644;
  border-top: 2px solid #666;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export default (props) => <Pad padLeft={props.padLeft}>
  <Icon />
</Pad>
