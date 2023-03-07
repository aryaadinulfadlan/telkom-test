import React from "react"
import Profile from "../../components/Profile"
import Repos from "../../components/Repos"
import SearchBox from "../../components/SearchBox"
import { ProductContainer } from "./ProductStyle"

function Products(): React.ReactElement {
    return (
      <ProductContainer>
        <SearchBox />
        <Profile />
        <Repos />
      </ProductContainer>
    )
  }
  
  export default Products