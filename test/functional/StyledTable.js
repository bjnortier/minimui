import styled from 'styled-components'

export default styled.table`
  border-spacing: 0px;
  > tbody > tr > td {
    height: 30px;
  }
  td {
    padding: 5px;
  }
  > tbody > tr > td:nth-child(2) {
    padding-left: 20px;
  }
`
