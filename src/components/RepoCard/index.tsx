import React from 'react'
import { IconContent, ProfileDesc, ProfileImage } from '../Profile/ProfileStyle'
import { BottomCard, Label, LabelWithIcon, RepoCardContainer, TopCard, TopCounter, TopLeftStyled } from './RepoCardStyle'
import { AiOutlineFork } from "react-icons/ai";
import { BsFillStarFill, BsEyeFill } from "react-icons/bs";
import { Data } from '../../features/GithubRepos/reducer';

type Repo = {
    item: Data
}
export default function RepoCard({ item }: Repo): React.ReactElement {
  return (
    <RepoCardContainer>
        <TopCard>
            <TopLeftStyled>
                <ProfileImage img_src={item.owner.avatar_url} width='50px' height='50px' border_radius='50%' />
                <ProfileDesc>
                    <h4>{item.owner.login}</h4>
                    <p>{item.name}</p>
                    <p style={{ textTransform: 'capitalize' }}>{item.visibility}</p>
                </ProfileDesc>
            </TopLeftStyled>
            <TopCounter>
                <IconContent gap='10px'>
                    <BsFillStarFill style={{ transform: 'translateY(-1.5px)' }} />
                    <span>{item.stargazers_count} stars</span>
                </IconContent>
                <IconContent gap='7px'>
                    <AiOutlineFork />
                    <span>{item.forks_count} forks</span>
                </IconContent>
            </TopCounter>
        </TopCard>
        <p>{item.description ? item.description : 'No Description'}</p>
        <BottomCard>
            <Label>{item.language ? item.language : 'Unknown'}</Label>
            <LabelWithIcon as={'a'} href={item.html_url} target={'_blank'}>
                <BsEyeFill />
                Visit Repo
            </LabelWithIcon>
        </BottomCard>
    </RepoCardContainer>
  )
}
