import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        setIsLoading(true)
        getProducto()
    }, [params])

    const getProducto = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const json = await response.json()
            setProducto(json)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className='justify-center flex items-center h-full mt-8'>
            <ItemDetail producto={producto} isLoading={isLoading} />
        </div>
    )
}

export default ItemDetailContainer