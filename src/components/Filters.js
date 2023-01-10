import React from 'react'
import styled from 'styled-components'

function Filters({ order, setOrder, min, setMin, max, setMax }) {
    return (
        <Wrapper>
            <Title>Filters</Title>
            <RangePrice>
                <Holder>
                    <Stamp>Min. Price</Stamp>
                    <Input type='number' value={min} onChange={(e) => setMin(e.target.value)} />
                </Holder>
                <Holder>
                    <Stamp>Max. Price</Stamp>
                    <Input type='number' value={max} onChange={(e) => setMax(e.target.value)} />
                </Holder>

                <Holder>
                <Stamp name='order'>Order by:</Stamp>
                <SelectOption name='order' onChange={(e) => setOrder(e.target.value)} value={order}>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </SelectOption>
            </Holder>
            </RangePrice>
        </Wrapper>
    )
}

export default Filters

const Wrapper = styled.fieldset`
    margin-left: 25px;
    padding: 25px;
    grid-area: 2 / 1 / 6 / 2;
    text-align: center;
    height: 100%;
`

const Title = styled.h3`
    margin-bottom: 20px;
`

const RangePrice = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
    width: 40%;
    margin-left: 5px;
    color: black;
    outline: none;
`

const SelectOption = styled.select`
    margin-left: 5px;
    width: 40%;
    color: black;
    outline: none;
`

const Stamp = styled.label`
    text-align: left;
    width: 60%;
`