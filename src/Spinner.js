import React from 'react'
import styled from 'styled-components'

const Pad = styled.span`
  padding-left: ${({ padLeft }) => padLeft ? 4 : 0}px;
`

const Icon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
`

const svg = `
<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
<svg width="100%" height="100%" viewBox="-2 -2 37 37" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#666" fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="4">
            <circle stroke-opacity=".25" cx="16" cy="16" r="16" />
            <path d="M 16 0 A 16 16 0 0 0 0 16">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 16 16"
                to="360 16 16"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
        </g>
    </g>
</svg>
`

export default (props) => <Pad padLeft={props.padLeft}>
  <Icon dangerouslySetInnerHTML={{ __html: svg }} />
</Pad>
