import React, { useState, useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { getRepos, getUser } from "../../api/github"
import Profile from "../../components/Profile"
import Repos from "../../components/Repos"
import SearchBox from "../../components/SearchBox"
import { errorFetchingRepos, resetRepos, startFetchingRepos, successFetchingRepos } from "../../features/GithubRepos/action"
import { errorFetchingUser, startFetchingUser, successFetchingUser } from "../../features/GithubUser/action"
import { ProductContainer } from "./ProductStyle"

function Products(): React.ReactElement {
    const [pageNumber] = useState<number>(1)
    const [username, setUsername] = useState<string>('sandhikagalih')
    const [tempUsername, setTempUsername] = useState<string>('')
    const dispatch = useDispatch()

    const handleChangeUsername = (params: string) => setUsername(params)

    const getData = useCallback(async () => {
      dispatch(startFetchingUser())
      dispatch(resetRepos())
      try {
        const { data, status, statusText } = await getUser(username)
        if (status === 200) {
          dispatch(successFetchingUser(data))
          dispatch(startFetchingRepos())
          const { data: dataRepos, status: statusRepos, statusText: statusTextRepos } = await getRepos(username, pageNumber)
          if (statusRepos === 200) {
            dispatch(successFetchingRepos(dataRepos))
          } else {
            alert(`Something went wrong, ${statusTextRepos}`)
            dispatch(errorFetchingRepos('ERROR'))
          }
        } else {
          alert(`Something went wrong, ${statusText}`)
        }
      } catch (err) {
        const error = err as Error
        dispatch(errorFetchingUser(error.message))
      }
    }, [username, pageNumber])

    useEffect(() => {
      getData()
    }, [getData])

    // console.log({username, tempUsername})
    return (
      <ProductContainer>
        <SearchBox tempUsername={tempUsername} setTempUsername={setTempUsername} handleChangeUsername={handleChangeUsername} />
        <Profile />
        <Repos />
      </ProductContainer>
    )
  }
  
  export default Products