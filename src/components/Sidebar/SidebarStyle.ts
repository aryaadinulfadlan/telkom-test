import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontSize1 } from '../../GlobalStyle';

type ContainerProps = {
  show: boolean;
}

export const SidebarContainer = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: ${({ show }) => !show ? '100%' : '0' };
    right: 0;
    bottom: 0;
    transition: left 500ms ease;
    background-color: #dceeee;
    display: flex;
    align-items: center;
    @media (min-width: 900px) {
        position: static;
        width: auto;
        background-color: transparent;
    }
`
export const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.3rem;
    cursor: pointer;
    display: block;
    @media (min-width: 900px) {
        display: none;
    }
`
export const Menu = styled.ul`
  display: grid;
  width: 100%;
  gap: 2rem;
  justify-items: center;
  margin-top: -7rem;
  li {
    font-size: ${FontSize1};
  }
  @media (min-width: 900px) {
      grid-template-columns: repeat(5, auto);
      margin-top: initial;
      align-items: center;
      gap: 1rem;
  }
`
export const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  margin-top: 1rem;
  @media (min-width: 900px) {
    margin-top: initial;
    margin-left: 2rem;
  }
`
export const LoginButton = styled(Link)`
  background-color: transparent;
  border: 1px solid black;
  padding: 5px 12px;
  text-transform: uppercase;
  border-radius: 5px;
`
export const DaftarButton = styled(Link)`
  background-color: #fbd3a9;
  border: 1px solid #fbd3a9;
  padding: 5px 12px;
  text-transform: uppercase;
  border-radius: 5px;
`