import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import ItemDetail from './ItemDetail'
import { db } from "../db/firebase"
import { collection, getDoc, doc } from "firebase/firestore"

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true)
        getProducto()
    }, [params])

    const getProducto = async () => {
        try {
            const productosCollection = collection(db, "productos")
            const productoPorId = doc(productosCollection, params.id)
            const consulta = await getDoc(productoPorId)
            if (!consulta.data()) {
                navigate("*")
            }
            setProducto(
                {
                    ...consulta.data(),
                    id: params.id
                }
            )
        } catch (error) {
            console.log(error)
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