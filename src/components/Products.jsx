import React, { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading. setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("")

            if (ComponentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                ComponentMounted = false
            }
        }

        getProducts()
    }, [])

  return (
    <div>

    </div>
  )
}

export default Products