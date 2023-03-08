import React from 'react'
import { BottomContent, IconContent, ProfileContainer, ProfileDesc, ProfileImage, TopContent, TopLeft, TopRight } from './ProfileStyle'
import { MdLocationPin } from "react-icons/md";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { GrPersonalComputer } from "react-icons/gr";
import { RootState, UserState } from '../../types';
import { useSelector } from 'react-redux';
import { statusList } from '../../features/GithubUser/reducer';
import LoaderAnimation from '../LoaderAnimation';
import { FontSize3 } from '../../GlobalStyle';

export default function Profile(): React.ReactElement {
  const { userData, userStatus, userError }: UserState = useSelector((state: RootState) => state.user)
  if (userStatus === statusList.process) {
    return <LoaderAnimation /> 
  }
  if (userStatus === statusList.error && userError !== null) {
    return <h3 style={{ textAlign: 'center', fontSize: FontSize3, marginTop: '4vw' }}>Invalid Github Username</h3>
  }
  console.log({ userStatus, userError })
  return (
    <ProfileContainer>
        <TopContent>
            <TopLeft>
                <ProfileImage img_src={userData.avatar_url} width='120px' height='120px' border_radius='14px' />
                <ProfileDesc>
                    <div>
                        <h3>{userData.name}</h3>
                        <p>{userData.login}</p>
                    </div>
                    <p>{userData.bio}</p>
                </ProfileDesc>
            </TopLeft>
            <TopRight>
                <IconContent gap='4px'>
                    <MdLocationPin />
                    <span>{userData.location}</span>
                </IconContent>
                <IconContent gap='4px'>
                    <BsTwitter />
                    <span>{userData.twitter_username ? userData.twitter_username : 'Unknown'}</span>
                </IconContent>
                <IconContent gap='4px'>
                    <SlUserFollowing />
                    <span>{userData.followers}</span>
                </IconContent>
                <IconContent gap='4px'>
                    <SlUserFollow />
                    <span>{userData.following}</span>
                </IconContent>
            </TopRight>
        </TopContent>
        <BottomContent>
            <IconContent gap='10px'>
                <GrPersonalComputer />
                <a href={`https://${userData.blog?.replace('https://', '')}`} target={'_blank'}>{userData.blog?.replace('https://', '')}</a>
            </IconContent>
            <IconContent gap='10px'>
                <BsGithub />
                <a href={userData.html_url} target={'_blank'}>{userData.html_url?.replace('https://', '')}</a>
            </IconContent>
        </BottomContent>
    </ProfileContainer>
  )
}
