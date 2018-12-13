import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  ${styledNormalize}
  @import url('https://rsms.me/inter/inter-ui.css');
  html { font-family: 'Inter UI', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter UI var alt', sans-serif; }
  }
  body {
    background-color: #e4e4e4;
    font-family: 'Inter UI', Serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: black;
  }
  h1, h2, h3 {
    font-family: 'Inter UI', Serif;
    font-weight: 400;
  }
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
  a:visited {
    color: black;
  }
  th {
    font-weight: 400;
  }
`
