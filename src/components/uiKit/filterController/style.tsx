import styled from 'styled-components'
interface FilterButtonContainerProps {
  isClearAll?: boolean
}
export const FilterButtonContainer = styled.button.attrs<FilterButtonContainerProps>(
  (props) => {
    const isClearAll = !props.isClearAll
      ? 'bg-slate-900 text-white'
      : 'bg-customGray-100'

    return {
      className: ` ${isClearAll} px-2 gap-2 flex-row flex items-center hover:opacity-50`,
    }
  }
)<FilterButtonContainerProps>``
