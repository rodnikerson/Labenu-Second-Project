import React from 'react'
import styled from 'styled-components'
import PurchaseBackground from '../imgs/purchasebackground.PNG'

function Cart({ cart, setCart, setIsOpen }) {

    let totalValue = 0

    const showCart = cart.map(item => {
        let value = (item.price * item.quantity).toFixed(4)
        totalValue += Number(value)
        return item.quantity > 0 &&
            <Item key={item.id}>
                <QuantityWrapper>
                    <Btn onClick={() => removeOneItem(item.id)}>-</Btn>
                    <QuantityNum>{item.quantity}</QuantityNum>
                    <Btn onClick={() => addOneItem(item.id)}>+</Btn>
                </QuantityWrapper>
                <Destination>{item.title}</Destination>
                <Price>{value}</Price>
            </Item>
    })

    const removeOneItem = (id) => {
        let newCart = [...cart]
        newCart[id].quantity = newCart[id].quantity - 1
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const addOneItem = (id) => {
        let newCart = [...cart]
        newCart[id].quantity = newCart[id].quantity + 1
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    return (
        <Wrapper>
            <Title>Cart</Title>
            {showCart}
            <Purchase onClick={() => totalValue > 0 && setIsOpen(isOpen => !isOpen)}>BUY FOR {totalValue.toFixed(4)} BTC</Purchase>
        </Wrapper>
    )
}

export default Cart

const Wrapper = styled.fieldset`
    position: relative;
    margin-right: 25px;
    padding: 25px;
    grid-area: 2 / 5 / 6 / 6;
    text-align: center;
    height: 100%;
`

const Title = styled.h3`
    margin-bottom: 20px;
`

const Item = styled.div`
    display: flex;
    height: 4rem;
    gap: 10px;
`

const Destination = styled.p`
    width: 40%;
    height: 1rem;
    text-align: left;
    overflow: hidden;
`

const QuantityWrapper = styled.div`
    min-width: 33%;
    display: flex;
    justify-content: space-between
`

const QuantityNum = styled.span`
    width: 2rem;
`

const Btn = styled.button`
    width: 1.25rem;
    height: 1.25rem;
    background: white;
    color: black;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`

const Price = styled.p`
    text-align: right;
    width: 22.5%;
`

const Purchase = styled.button`
    width: 100%;
    height: 5%;
    border: 0;
    background-image: url('${PurchaseBackground}');
    background-position: center;
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
`