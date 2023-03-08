import React from 'react'
import RepoCard from '../RepoCard'
import { ReposContainer } from './ReposStyle'

export default function Repos(): React.ReactElement {
  return (
    <ReposContainer>
        {
          [1,2,3,4,5,6,7,8,9,10].map(el => (
            <RepoCard />
          ))
        }
    </ReposContainer>
  )
}
