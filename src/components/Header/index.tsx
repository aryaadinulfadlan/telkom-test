import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer, TelkomLogo } from './HeaderStyle'
import Logo from '../../assets/img/telkom-logo.png'
import BarButton from '../BarButton'
import Sidebar from '../Sidebar'

export default function Header(): React.ReactElement {
  const [show, setShow] = useState<boolean>(false)
  const navigate = useNavigate()

  const toggleShow = () => setShow(prev => !prev)
  return (
    <HeaderContainer>
      <TelkomLogo onClick={() => navigate('/')}>
        <span>Telkom Indonesia</span>
        <div>
          <img src={Logo} alt="Telkom Logo" />
        </div>
      </TelkomLogo>
      <BarButton toggleShow={toggleShow} />
      <Sidebar show={show} setShow={setShow} />
    </HeaderContainer>
  )
}
