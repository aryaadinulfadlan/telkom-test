import React from 'react'
import styled from 'styled-components';
import { FontSize1 } from '../../GlobalStyle';

export default function SearchBox(): React.ReactElement {
  return (
    <SearchContainer>
        <div>
            <input type="text" placeholder='Github Username' />
        </div>
        <button>Search</button>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 1rem;
    font-size: ${FontSize1};
    input {
        width: 100%;
        border: none;
        outline: none;
    }
    button {
        border: none;
        outline: none;
        background-color: green;
        color: #fff;
        padding: 4px 10px;
        border-radius: 5px;
    }
    @media (min-width: 700px) {
        padding: 8px 1rem;
        button {
            padding: 6px 1rem;
        }
    }
`;