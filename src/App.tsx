import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./GlobalStyle"
import Pages from "./pages"
import React from "react"
import { Provider } from "react-redux"
import store from "./features/store"

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Pages />
      </BrowserRouter>
    </Provider>
  )
}

export default App
