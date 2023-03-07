import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontSize1, NolKoma7to1rem } from '../GlobalStyle'

type SidebarProps = {
  show: boolean;
  setShow: (params: boolean) => void;
}
type ContainerProps = {
  show: boolean;
}

export default function Sidebar({ show, setShow }: SidebarProps): React.ReactElement {
  return (
    <SidebarContainer show={show}>
        <CloseIcon onClick={() => setShow(false)} / >
        <Menu>
          <li onClick={() => setShow(false)}>
            <Link to={'/products'}>Products</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link to={'/'}>Layanan</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link to={'/'}>Integrasi</Link>
          </li>
          <li onClick={() => setShow(false)}>
            <Link to={'/'}>Lainnya</Link>
          </li>
          <BtnWrap>
            <li onClick={() => setShow(false)}>
              <LoginButton to={'/'}>login</LoginButton>
            </li>
            <li onClick={() => setShow(false)}>
              <DaftarButton to={'/'}>daftar</DaftarButton>
            </li>
          </BtnWrap>
        </Menu>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div<ContainerProps>`
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
const CloseIcon = styled(FaTimes)`
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
const Menu = styled.ul`
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
const BtnWrap = styled.div`
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