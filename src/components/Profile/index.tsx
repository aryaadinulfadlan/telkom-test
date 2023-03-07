import React from 'react'
import { BottomContent, IconContent, ProfileContainer, ProfileDesc, ProfileImage, TopContent, TopLeft, TopRight } from './ProfileStyle'
import { MdLocationPin } from "react-icons/md";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { GrPersonalComputer } from "react-icons/gr";

export default function Profile(): React.ReactElement {
  return (
    <ProfileContainer>
        <TopContent>
            <TopLeft>
                <ProfileImage />
                <ProfileDesc>
                    <div>
                        <h3>Arya Adinul Fadlan</h3>
                        <p>aryaadinulfadlan</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, blanditiis.</p>
                </ProfileDesc>
            </TopLeft>
            <TopRight>
                <IconContent gap='4px'>
                    <MdLocationPin />
                    <span>India</span>
                </IconContent>
                <IconContent gap='4px'>
                    <BsTwitter />
                    <span>aryaadinul</span>
                </IconContent>
                <IconContent gap='4px'>
                    <SlUserFollowing />
                    <span>9</span>
                </IconContent>
                <IconContent gap='4px'>
                    <SlUserFollow />
                    <span>6</span>
                </IconContent>
            </TopRight>
        </TopContent>
        <BottomContent>
            <IconContent gap='10px'>
                <GrPersonalComputer />
                <span>https://aryaaf.vercel.app</span>
            </IconContent>
            <IconContent gap='10px'>
                <BsGithub />
                <span>https://github.com/aryaadinulfadlan</span>
            </IconContent>
        </BottomContent>
    </ProfileContainer>
  )
}
