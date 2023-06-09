import React, { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")

            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                
            }
            return () => {
                componentMounted = false
            }
        }

        getProducts()
    }, [])

    const Loading = () => {
        return(
            <>
                ...Loading...
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark">All</button>
                    <button className="btn btn-outline-dark">Men's Clothing</button>
                    <button className="btn btn-outline-dark">Women's Clothing</button>
                    <button className="btn btn-outline-dark">Jewelery</button>
                    <button className="btn btn-outline-dark">Eletronics</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 bg-gray">
                                    <div className="card h-100 text-center p-4 ">
                                        <img src={product.image} className='card-image-top' alt="" />

                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">
                                                ${product.price}
                                            </p>
                                            <a href="#" className='btn btn-primary'>
                                                Go Somewhare
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )})}
            </>
        )
    }

  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {
                    loading ? <ShowProducts /> : <Loading /> 
                }
            </div>
        </div>
    </div>
  )
}

export default Products