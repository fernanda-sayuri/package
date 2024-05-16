import styled from "styled-components";

export const DetailsTable = styled.table.attrs(({className, ...rest}) => {
    return {
        className: `w-full rounded-md overflow-hidden ` + className,
        ...rest
    }
})``

export const DetailsTableHead = styled.thead.attrs(({...rest}) => {
    return {
        className: 'bg-ligth-neutral-bg-strong',
        ...rest
    }
})``

export const DetailsTableTh = styled.th.attrs(({...rest}) => {
    return {
        className: 'p-2 px-4 text-left',
        ...rest,
    }
})``

export const DetailsTableBody = styled.tbody.attrs(({...rest}) => {
    return {
        className: 'bg-ligth-neutral-bg-medium',
        ...rest
    }
})``

export const DetailsTableTr = styled.tr.attrs(({...rest}) => {
    return {
        ...rest
    }
})``

export const DetailsTableTd = styled.td.attrs(({...rest}) => {
    return {
        className: 'p-2 px-4 border-border',
        ...rest
    }
})` 
    border-bottom: 1px solid #dcdcdc;

    a {
        color: blue;

        &:hover {
            color: darkblue;
        }
    }
`