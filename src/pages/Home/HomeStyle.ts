import styled from "styled-components";
import { FontSize1, FontSize10, FontSize9, headerHeight } from "../../GlobalStyle";
import BannerImg from '../../assets/img/item-4.jpg'
import RightImg from '../../assets/img/item-5.jpg'

export const HomeContainer = styled.div`
    height: calc(100vh - ${headerHeight});
    display: grid;
    grid-template-rows: 1fr 300px;
    gap: 10px;
    @media (min-width: 800px) {
        grid-template-rows: 1fr 350px;
    }
    @media (min-width: 1200px) {
        grid-template-rows: 1fr 280px;
    }
`;
export const Banner = styled.div`
    background-image: ${`url(${BannerImg})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 1rem 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
        font-size: ${FontSize10};
        margin-left: 4vw;
        width: 80%;
    }
    p {
        font-size: ${FontSize1};
        margin-left: 4vw;
        width: 80%;
        max-width: 800px;
    }
`;
export const ListItem = styled.div`
    display: grid;
    padding: 5px;
    grid-template-rows: 1fr 1fr;
    gap: 5px;
    justify-items: center;
    @media (min-width: 1200px) {
        grid-template-rows: 0.8fr;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
`;
export const Lefttem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 7px;
    width: 100%;
    max-width: 900px;
    @media (min-width: 1200px) {
        max-width: unset;
    }
`;
export const ImgBackdrop = styled.div`
    background-color: #f0f0f0;
    position: absolute;
    top: 150%;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 500ms;
`;
export const Item = styled.div`
    background-color: #f0f0f0;
    display: grid;
    grid-template-rows: 1fr auto;
    border-radius: 1vw;
    font-size: ${FontSize1};
    overflow: hidden;
    position: relative;
    p {
        text-align: center;
    }
    &:hover > ${ImgBackdrop} {
        top: 0;
    }
`;
export const ImgWrap = styled.div`
    position: relative;
    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const RightItem = styled.div`
    background-image: ${`url(${RightImg})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    position: relative;
    width: 100%;
    max-width: 700px;
    @media (min-width: 1200px) {
        max-width: unset;
    }
`;
export const RightContent = styled.div`
    position: absolute;
    bottom: 10%;
    right: 5%;
    color: red;
    font-size: ${FontSize1};
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-end;
    p {
        background-color: #fff;
        padding: 0 10px;
        border-radius: 5px;
    }
`;
export const DetailButton = styled.button`
    background-color: red;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px;
    color: #fff;
    font-size: ${FontSize1};
`;