import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';
import React from 'react'

type BarButtonProps = {
    toggleShow: () => void
}

export default function BarButton({ toggleShow }: BarButtonProps): React.ReactElement {
  return (
    <BarWrapper>
        <FaBars onClick={toggleShow} />
    </BarWrapper>
  )
}

const BarWrapper = styled.div`
    cursor: pointer;
    & > svg {
        font-size: 1.2rem;
    }
    @media (min-width: 900px) {
        display: none;
    }
`