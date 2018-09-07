import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  ${styledNormalize}
  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
  @import 'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500';
  body {
    background-color: #e4e4e4;
    font-family: 'Roboto', Serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: black;
  }
  h1, h2, h3 {
    font-family: 'Roboto', Serif;
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
