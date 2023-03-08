import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontSize3, FontSize8 } from '../GlobalStyle'

export const Loader = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem auto 0;
    h3 {
        font-size: ${FontSize3};
        text-align: center;
    }
`
const BounceAnimation = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.2); 
  }
`
export const Ball = styled.div`
  width: ${FontSize8};
  height: ${FontSize8};
  border-radius: 50%;
  background-color: #2d0763;
  animation: ${BounceAnimation} 0.7s linear infinite alternate; 
  margin-bottom: 10px;
`
export default function LoaderAnimation(): React.ReactElement {
  return (
    <Loader>
        <Ball/>
        <h3>Please Wait..</h3>
    </Loader>
  )
}
