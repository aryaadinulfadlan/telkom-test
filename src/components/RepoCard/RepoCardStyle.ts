import styled from "styled-components";
import { FontSize1 } from "../../GlobalStyle";
import { TopLeft } from "../Profile/ProfileStyle";

export const RepoCardContainer = styled.div`
    background-color: white;
    box-shadow: 0px 2px 10px rgba(228, 226, 226, 0.78);
    padding: 12px;
    border-radius: 10px;
    display: grid;
    grid-template-rows: repeat(3, auto);
    gap: 1rem;
    & > p {
        font-size: ${FontSize1};
    }
`;
export const TopCard = styled.div`
    display: grid;
    gap: 5px;
`;
export const TopLeftStyled = styled(TopLeft)`
    align-items: center;
`;
export const TopCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
`;
export const BottomCard = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${FontSize1};
`;
export const Label = styled.div`
    padding: 2px 8px;
    background-color: #609f1c;
    border-radius: 5px;
    color: white;
`;
export const LabelWithIcon = styled(Label)`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;
