import React from 'react'
import { Link } from 'react-router-dom';
import { BtnWrap, CloseIcon, DaftarButton, LoginButton, Menu, SidebarContainer } from './SidebarStyle';

type SidebarProps = {
  show: boolean;
  setShow: (params: boolean) => void;
}


export default function Sidebar({ show, setShow }: SidebarProps): React.ReactElement {
  return (
    <SidebarContainer show={show}>
        <CloseIcon onClick={() => setShow(false)} / >
        <Menu>
          <li onClick={() => setShow(false)}>
            <Link to={'/products'}>Repos</Link>
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