import styled from "styled-components";
import { FontSize1, headerHeight, NolKoma6to1rem } from "../../GlobalStyle";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${headerHeight};
    width: 100%;
    padding: 0 3vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #ecf5f8;
    @media (min-width: 900px) {
        padding: 0 5vw;
    }
`
export const TelkomLogo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
        font-size: ${FontSize1};
    }
    div {
        position: relative;
        width: 2rem;
    }
`