import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import { headerHeight } from '../GlobalStyle'
import Home from './Home'
import NoMatch from './NoMatch'
import Products from './products'

export default function Pages(): React.ReactElement {
  return (
    <>
      <Header />
      <Page>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/products' element={<Products/>} />
              <Route path='*' element={<NoMatch />} />
          </Routes>
      </Page>
    </>
  )
}

export const Page = styled.section`
    position: relative;
    top: ${headerHeight};
    @media (min-width: 900px) {

    }
`