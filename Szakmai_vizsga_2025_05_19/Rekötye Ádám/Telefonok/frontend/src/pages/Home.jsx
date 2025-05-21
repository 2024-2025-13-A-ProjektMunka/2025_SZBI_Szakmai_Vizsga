import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-kategoriak'>
      <div className='home-kategoria'><a href="/samsung">Samsung</a></div>
      <div className='home-kategoria'><a href="/iphone">Iphone</a></div>
      <div className='home-kategoria'><a href="/xiaomi">Xiaomi</a></div>
      <div className='home-kategoria'><a href="/cart">Kosár</a></div>
      </div>
    </div>
  )
}

export default Home