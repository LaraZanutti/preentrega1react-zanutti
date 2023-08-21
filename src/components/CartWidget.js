import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


function CartWidget() {
    return (
        <NavLink className='flex justify-center text-xl items-center' to="/carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className='rounded-full bg-red-500 ml-3 p-2 text-xs font-bold'>3</p>
        </NavLink>
    )
}

export default CartWidget