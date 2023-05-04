import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold" href="#">E-Commerce</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link className="nav-link active" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Product</Link>
                    </li>                
                     <li className="nav-item">
                        <Link className="nav-link" href="#">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Contact</Link>
                    </li>

                </ul>

            <div className="buttons">
                <Link href="" className='btn btn-outline-dark'>
                    <i className="fa fa-sign-in me-1">Login</i>
                </Link>
                <Link href="" className='btn btn-outline-dark'>
                    <i className="fa fa-sign-in me-1">Register</i>
                </Link>
                <Link href="" className='btn btn-outline-dark'>
                    <i className="fa fa-sign-in me-1">cart</i>
                </Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar