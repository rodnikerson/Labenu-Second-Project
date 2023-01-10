import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../imgs/logo.gif'

function Navbar() {

    const sentences = [
        'Jobs fill your pockets, adventures fill your soul.',
        'Remember that happiness is a way of travel, not a destination.',
        'The world is a book and those who do not travel read only one page.',
        'Travel is the only thing you buy that makes you richer.',
        'In the end, we only regret the chances we did not take'
    ]

    const [sentence, setSentence] = useState('')

    useEffect(() => {
        const randomIdx = Math.floor(Math.random() * sentences.length)
        setSentence(sentences[randomIdx])
    }, [])


    return (
        <Header>
            <Img src={Logo} alt='Logo' />
            <p>{sentence}</p>
        </Header>
    )
}

export default Navbar

const Header = styled.header`
    width: 100%;
    padding: 0 10px;
    text-align: center;
    grid-area: 1 / 1 / 2 / 6;
`

const Img = styled.img`
    background-color: transparent;
    width: 80px;
`