import styled from 'styled-components'

export default styled.table`
  border-spacing: 0px;
  > tbody > tr > td {
    height: 30px;
  }
  th {
    text-align: left;
    font-weight: 400;
  }
  td, th {
    padding: 8px;
  }
  > tbody > tr > td:nth-child(2) {
  }
`
