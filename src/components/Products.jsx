import React, { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading. setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("")

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
                <div className="buttons">
                    <button className="btn btn-outline-dark">All</button>
                    <button className="btn btn-outline-dark">Men's Clothing</button>
                </div>
            </>
        )
        

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
                    loading ? <Loading /> : <ShowProducts /> 
                }
            </div>
        </div>
    </div>
  )
}

export default Products