import React from 'react'
import styled from 'styled-components'

function SearchBar({setSearch}) {
  return (
    <SearchWrapper>
      <FormGroup>
        <SearchInput placeholder='Planet Name' type="text" name="planet" onChange={(e) => (setSearch(e.target.value))} />
        <Stamp htmlFor="planet">Planet Name</Stamp>
      </FormGroup>
    </SearchWrapper>
  )
}

export default SearchBar

const SearchWrapper = styled.div`
    grid-area: 2 / 2 / 3 / 5;
    display: flex;
    align-items: top;
    justify-content: center;
`

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin: 0 0 2rem;
`

const SearchInput = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid #fff;
    outline: 0;
    font-size: 1.15rem;
    padding: .4rem 0;
    background: transparent;
    
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ Label {
        font-size: 1.15rem;
        cursor: text;
        top: 20px;
    }

    &:focus, &:hover {
        ~ Label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: gray;
            font-weight:700;  
        }
        padding-bottom: 6px;
        border-bottom: 1px solid gray;
    }

    &:required, &:invalid { box-shadow:none; }
`

const Stamp = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: white;

    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    z-index: -1;
`