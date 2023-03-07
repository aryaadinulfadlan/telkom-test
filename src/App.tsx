import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./GlobalStyle"
import Pages from "./pages"
import React from "react"

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Pages />
    </BrowserRouter>
  )
}

export default App
