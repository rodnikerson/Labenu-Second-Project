import { createGlobalStyle } from 'styled-components';
import backgroundImg from './imgs/spacebackground.png'
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import TravelStore from './components/TravelStore';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import { destinationsArray } from './destinations';
import Modal from './components/Modal';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'VT323';
  color: white;
}

body {
  background-image: url('${backgroundImg}');
  padding-bottom: 10px;
}

.App {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0.5fr 0.5fr repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 95vh;
  }
`

function App() {

  const cartInit = []
  for(let i = 0; i < destinationsArray.length; i++) {
    cartInit[i] = {id: i, title: destinationsArray[i].title, quantity: 0, price: destinationsArray[i].price}
  }

  const [order, setOrder] = useState('ascending')
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(500)
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState(cartInit)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'))
    items && setCart(items)
  }, [])

  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Filters order={order} setOrder={setOrder} min={min} setMin={setMin} max={max} setMax={setMax} />
      <SearchBar setSearch={setSearch} />
      <TravelStore min={min} max={max} order={order} search={search} cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} setIsOpen={setIsOpen}/>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;