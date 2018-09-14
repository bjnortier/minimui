import React from 'react'
import styled from 'styled-components'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Span = styled.div`
  display: inline-block;
  font-size: 16px;
  color: ${props => props.pass ? '#0eb50e' : '#f00'}
`

export default (props) => <Span pass={props.pass}>
  <FontAwesomeIcon icon={props.pass ? faCheckCircle : faTimesCircle} />
</Span>
