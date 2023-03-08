import styled from "styled-components";
import { headerHeight } from "../../GlobalStyle";

export const ProductContainer = styled.div`
    padding: 1rem;
    min-height: calc(100vh - ${headerHeight});
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 1rem;
`;