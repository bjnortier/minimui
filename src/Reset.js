import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Barlow:200,300,400,700');
  html { font-family: 'Barlow', sans-serif; }
  html {
    background-color: #efefef;
  }
  body {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3 {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 400;
    margin: 0;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 20px;
  }
  a, a:visited {
    color: black;
  }
  th {
    font-weight: 400;
  }
`
