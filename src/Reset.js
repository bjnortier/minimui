import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Barlow:300,400');
  input, select, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
