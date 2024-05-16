import styled from 'styled-components'

export const TableHead = styled.th.attrs((props) => {
  return {
    className:
      'bg-ligth-main-bg-weak whitespace-nowrap px-[24px] h-[54px] tracking-wider text-gray-500 text-left',
  }
})`
  font-weight: 500 !important;
  color: #1b1b1b !important;
`

export const TableCell = styled.td.attrs(() => {
  return {
    className: 'whitespace-nowrap px-[24px] py-[0.75rem] ',
  }
})``
