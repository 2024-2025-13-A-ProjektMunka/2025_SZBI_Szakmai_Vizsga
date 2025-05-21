import React from 'react'
import {Link} from 'react-router-dom';

  
const Home = () => {
  return (
    <div className='home-container'>
        <div ClassName='home-kategoriak'>
            <div className='home-kategoria'>
                <div className='home-samsung'>
                    <Link to = '/samsung'>Samsung</Link>
                </div>

                <div className='home-kategoria'>
                <div ClassName='home-iphone'>
                    <Link to ='/iphone'>Iphone</Link>
                </div>
                </div>

                    <div className='home-kategoria'>
                        <div className='home-xiaomi'>
                    <Link to ='/xiaomi'>Xiaomi</Link>
                </div>
                </div>

                <div className='home-kategoria'>
                    <div ClassName='home-cart'>
                    <Link to ='/cart'>Kosár</Link>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home
