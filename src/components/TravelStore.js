import React from 'react'
import styled from 'styled-components'
import { destinationsArray } from '../destinations'
import skull from '../imgs/skull.png'
import coin from '../imgs/btc.png'

function TravelStore({ min, max, order, search, cart, setCart }) {

  const arrangement = (a, b) => {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return 1
    }
    return 0
  }

  const addToCart = (id) => {
    let newCart = [...cart]
    newCart[id - 1].quantity = newCart[id - 1].quantity + 1
    setCart(newCart)
  }

  const render = destinationsArray
    .sort((a, b) => (order === 'ascending') ? arrangement(a, b) : arrangement(b, a))
    .filter(destination => destination.price >= min && destination.price <= max)
    .filter(destination => destination.title.toUpperCase().includes(search.toUpperCase()))
    .map(destination => (
      <Section key={destination.id}>
        <PlanetName>{destination.title}</PlanetName>
        {
          destination.oneWay && <SkullImg src={skull} alt='Skull' title='There is no way back!' />
        }
        <PlanetImg src={destination.img} alt={destination.title} />
        <span>{destination.distance}</span> <span>{destination.travelTime}</span>
        <PriceButton onClick={() => addToCart(destination.id)}><CoinImg src={coin} alt='Bitcoin currency logo' /> {destination.price + ' BTC'}</PriceButton>
      </Section>
    ))

  return (
    <Article>{render}</Article>
  )
}

export default TravelStore

const Article = styled.article`
  grid-area: 3 / 2 / 6 / 5;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 10px;
  justify-content: center;
`

const PlanetImg = styled.img`
  width: 175px;
`

const SkullImg = styled.img`
  width: 20px;
  position: absolute;
`

const CoinImg = styled.img`
  width: 1rem;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const PriceButton = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid white;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const PlanetName = styled.h3`
  text-align: center;
`