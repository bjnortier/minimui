import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Barlow:200,300,400,700');
  html { font-family: 'Barlow', sans-serif; }
  body {
    background-color: #f7f7f7;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: black;
  }
  h1, h2, h3 {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 400;
    margin: 0;
  }
  h1 {
    font-size: 54px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 24px;
  }
  a:visited {
    color: black;
  }
  th {
    font-weight: 400;
  }
`
