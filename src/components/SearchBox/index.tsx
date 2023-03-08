import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components';
import { FontSize1 } from '../../GlobalStyle';

type SearchBoxProps = {
    tempUsername: string
    setTempUsername: Dispatch<SetStateAction<string>>,
    handleChangeUsername: (params: string) => void
}
export default function SearchBox({ tempUsername, setTempUsername, handleChangeUsername }: SearchBoxProps): React.ReactElement {

  const handleChangeTempUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTempUsername(value)
  }

  const handleSearch = () => {
    if (tempUsername === '') {
        return
    }
    handleChangeUsername(tempUsername)
    setTempUsername('')
  }
  return (
    <SearchContainer>
        <div>
            <input type="text" placeholder='Github Username' value={tempUsername} onChange={handleChangeTempUsername} />
        </div>
        <button onClick={handleSearch}>Search</button>
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
    box-shadow: 0px 2px 10px rgba(228, 226, 226, 0.78);
    input {
        width: 100%;
        border: none;
        outline: none;
    }
    button {
        border: none;
        outline: none;
        background-color: #609f1c;
        color: #fff;
        padding: 4px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    @media (min-width: 700px) {
        padding: 8px 1rem;
        button {
            padding: 6px 1rem;
        }
    }
`;