import React from 'react'
import { useSelector } from 'react-redux'
import { statusList } from '../../features/GithubRepos/reducer'
import { FontSize3 } from '../../GlobalStyle'
import { ReposState, RootState } from '../../types'
import LoaderAnimation from '../LoaderAnimation'
import RepoCard from '../RepoCard'
import { ReposContainer } from './ReposStyle'

export default function Repos(): React.ReactElement {
  const { reposData, reposError, reposStatus }: ReposState = useSelector((state: RootState) => state.repos)
  
  return (
    <>
      {
        (reposData.length === 0 && reposStatus === statusList.process) && <LoaderAnimation />
      }
      {
        (reposData.length === 0 && reposStatus === statusList.error && reposError !== null) && (
          <h2 style={{ fontSize: FontSize3, textAlign: 'center' }}>No Data Available</h2>
        )
      }
      <ReposContainer>
          {
            (reposData.length > 0 && reposStatus === statusList.success && reposError === null) && reposData.map(el => (
              <RepoCard key={`${el.id}-${el.node_id}`} item={el} />
            ))
          }
      </ReposContainer>  
    </>
  )
}