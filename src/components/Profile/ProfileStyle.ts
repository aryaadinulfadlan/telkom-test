import styled from "styled-components";
import { FontSize1 } from "../../GlobalStyle";

type IconContentProps = {
    gap: string;
}
type ProfileImageProps = {
    width: string;
    height: string;
    border_radius: string;
}

export const ProfileContainer = styled.div`
    background-color: white;
    border-radius: 1rem;
    padding: 12px;
    display: grid;
    gap: 1rem;
    max-width: 700px;
    margin: 0 auto;
    box-shadow: 0px 2px 10px rgba(228, 226, 226, 0.78);
`;
export const TopContent = styled.div`
    display: grid;
    gap: 10px;
    @media (min-width: 600px) {
        grid-template-columns: auto auto;
        gap: 1rem;
    }
`;
export const TopLeft = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
`;
export const ProfileImage = styled.div<ProfileImageProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-image: url('https://avatars.githubusercontent.com/u/64993961?v=4');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${({ border_radius }) => border_radius};
`;
export const ProfileDesc = styled.div`
    font-size: ${FontSize1};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const TopRight = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    @media (min-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`;
export const IconContent = styled.div<IconContentProps>`
    display: flex;
    align-items: center;
    gap: ${({ gap }) => gap};
    font-size: ${FontSize1};
`;
export const BottomContent = styled.div`

`;