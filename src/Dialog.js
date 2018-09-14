import styled from 'styled-components'

const Dialog = styled.div`
  display: inline-block;
  background-color: #f5f5f5;
  padding: 20px;
  border: solid 1px #ccc;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 3px #ddd;
`
export const Header = styled.div`
  position: relative;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -20px;
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: solid 1px #eee;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
`

export const Footer = styled.div`
  position: relative;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -20px;
  margin-top: 20px;
  padding: 20px;
  border-top: solid 1px #eee;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #d0ecff;
`

export default Dialog
