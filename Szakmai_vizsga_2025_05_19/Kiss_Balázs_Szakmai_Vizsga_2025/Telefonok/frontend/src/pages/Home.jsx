import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-kategoriak'>
            <div className='home-kategoria'>
                <Link to='/iphone'>IPhone</Link>
                <Link to='/samsung'>Samsung</Link>
                <Link to='/xiaomi'>Xiaomi</Link>
                <Link to='/cart'>Kosár</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
