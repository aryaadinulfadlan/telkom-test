import styled from "styled-components";

export const ReposContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    gap: 10px;
    margin-top: 5vw;
    @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
        gap: 2rem;
    }
`;