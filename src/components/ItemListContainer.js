import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        setIsLoading(true)
        getProductos()
    }, [params])

    const getProductos = async () => {
        let url = "https://fakestoreapi.com/products"
        if (params.nombre) {
            url = `https://fakestoreapi.com/products/category/${params.nombre}`
        }
        try {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className='flex justify-center gap-4 p-8'>
            <ItemList data={data} isLoading={isLoading} />
        </div>
    )
}

export default ItemListContainer