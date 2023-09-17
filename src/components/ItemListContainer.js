import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../db/firebase'

function ItemListContainer() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(() => {
        setIsLoading(true)
        getProductos()
    }, [params])

    const getProductos = async () => {
        const productos = []
        let productosFiltrados = []
        try {
            const productosCollection = collection(db, "productos")
            if (params.nombre) {
                productosFiltrados = query(productosCollection, where("category", "==", params.nombre))
            }

            const q = await getDocs(params.nombre ? productosFiltrados : productosCollection)

            q.docs.map((doc) => {
                const producto = doc.data()
                producto.id = doc.id
                productos.push(producto)
            })
            setData(productos)
        } catch (error) {
            console.log(error)
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