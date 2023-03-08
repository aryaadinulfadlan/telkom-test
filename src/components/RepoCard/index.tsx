import React from 'react'
import { IconContent, ProfileDesc, ProfileImage } from '../Profile/ProfileStyle'
import { BottomCard, Label, LabelWithIcon, RepoCardContainer, TopCard, TopCounter, TopLeftStyled } from './RepoCardStyle'
import { AiOutlineFork } from "react-icons/ai";
import { BsFillStarFill, BsEyeFill } from "react-icons/bs";

export default function RepoCard(): React.ReactElement {
  return (
    <RepoCardContainer>
        <TopCard>
            <TopLeftStyled>
                <ProfileImage width='50px' height='50px' border_radius='50%' />
                <ProfileDesc>
                    <h4>Arya Adinul Fadlan</h4>
                    <p>repo name</p>
                    <p>Public / Private</p>
                </ProfileDesc>
            </TopLeftStyled>
            <TopCounter>
                <IconContent gap='10px'>
                    <BsFillStarFill style={{ transform: 'translateY(-1.5px)' }} />
                    <span>0 stars</span>
                </IconContent>
                <IconContent gap='7px'>
                    <AiOutlineFork />
                    <span>0 forks</span>
                </IconContent>
            </TopCounter>
        </TopCard>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ipsa minus eligendi dolorum, dolores alias laudantium eum dolor voluptatibus!</p>
        <BottomCard>
            <Label>JavaScript</Label>
            <LabelWithIcon>
                <BsEyeFill />
                Visit Repo
            </LabelWithIcon>
        </BottomCard>
    </RepoCardContainer>
  )
}
