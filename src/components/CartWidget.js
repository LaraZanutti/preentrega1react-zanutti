import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function CartWidget() {
    return (
        <div className='flex justify-center text-xl items-center'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className='rounded-full bg-red-500 ml-3 p-2 text-xs font-bold'>3</p>
        </div>
    )
}

export default CartWidget