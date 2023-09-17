import { useContext, useState } from 'react'
import { GridLoader } from 'react-spinners'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import CartContext from '../context/CartContext'
import Swal from 'sweetalert2'

function ItemDetail({ producto, isLoading }) {
    const { addItem } = useContext(CartContext)
    const [mostrarBoton, setMostrarBoton] = useState(false)

    const navigate = useNavigate()
    const irACarrito = () => {
        navigate(`/cart`)
    }

    const onAdd = (cantidad) => {
        setMostrarBoton(true)
        addItem(producto, cantidad)

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: `Added ${cantidad} ${producto.title} to cart `
        })
    }
    return (
        isLoading ? <GridLoader color="#fc8181" className='mt-16' /> : (
            <div className="bg-white p-8 mx-auto max-w-3xl rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:pr-6">
                        <img src={producto.image} alt={producto.title} className="w-full h-auto max-h-80 mx-auto rounded-lg" />
                    </div>
                    <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
                        <h1 className="text-3xl font-semibold mb-2 text-center">{producto.title}</h1>
                        <p className="text-2xl text-green-600 mb-4 text-center">$ {producto.price}</p>
                        <p className="text-gray-800 mb-6 text-center">{producto.description}</p>
                        {mostrarBoton ? <div className='flex justify-center'><button className="btn btn-warning" onClick={irACarrito}>Go to cart</button></div> : <ItemCount onAdd={onAdd} qtyColor={"text-gray-700"} btnMargin={"mt-6"} />}
                    </div>
                </div>
            </div>
        )
    )
}

export default ItemDetail