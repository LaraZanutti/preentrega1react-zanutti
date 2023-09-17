import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import CartContext from '../context/CartContext'


function CartWidget() {
    const { productos } = useContext(CartContext)

    const cantidadTotal = productos.reduce((acc, producto) => acc + producto.cantidad, 0)

    return (
        <NavLink className='flex justify-center text-xl items-center' to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="badge badge-error bg-red-500 ml-3 text-white p-2 text-xs font-bold">{cantidadTotal}</div>
        </NavLink>
    )
}

export default CartWidget