import React from 'react'
// import BG from '../assets/bg.png'

const Home = () => {
  return (
    <div className='hero'>

        <div class="card text-bg-dark">

            {/* <img src={BG} class="card-img" alt="background" height='550px' /> */}

            <div class="card-img-overlay d-flex flex-column justify-content-center">

                <div className="container">
                    <h5 class="card-title display-3 mb-0">New Arrivals</h5>

                    <p class="card-text lead fs-2">Check out all the Trands</p>
                   
                </div>

            </div>

        </div>

    </div>
  )
}

export default Home