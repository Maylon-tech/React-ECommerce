import React from 'react'
import Product from '../Product/Products'
// import BG from '../assets/bg.png'

const Home = () => {
  return (
    <div className='hero'>

        <div class="card text-white bg-gray">

          <img 
            src="https://t4.ftcdn.net/jpg/03/20/68/71/360_F_320687108_3UZ13l44Ob5cel208W7DaRnD5BR9DfY7.jpg" 
            class="card-img" 
            alt="background" 
            height='550px' 
          /> 

          <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 class="card-title display-3 mb-0">New Arrivals</h5>
              <p class="card-text lead fs-2">Check out all the Trands</p>                   
            </div>
          </div>
          <Product />
        </div>

    </div>
  )
}

export default Home