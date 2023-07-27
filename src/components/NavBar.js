import React from 'react'
import CartWidget from './CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, faCircleInfo, faFaceSmile, faPhone, faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <nav className='navbar flex justify-between text-base '>
            <h1 className="text-lg bg-red-400 rounded-full p-2"><FontAwesomeIcon className='mr-2' icon={faShop} bounce />LariZtore</h1>
            <div className='w-full justify-end mr-5 hidden md:flex'>
                <a className='hover:bg-red-400 rounded-full p-3' href="#"><FontAwesomeIcon icon={faPhone} className='text-lg mr-2' />Contacto</a>
                <a className='hover:bg-red-400 rounded-full p-3 ' href="#"> <FontAwesomeIcon icon={faCircleInfo} className='text-lg mr-2' />Quiénes somos</a>
                <a className='hover:bg-red-400 rounded-full p-3' href="#"> <FontAwesomeIcon icon={faFaceSmile} className='text-lg mr-2' />Login</a>
            </div>
            <CartWidget />
            <div className='flex justify-end text-xl md:hidden'>
                <details className="dropdown dropdown-end">
                    <summary className="m-1 btn btn-ghost"> <FontAwesomeIcon icon={faBars} /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <a className='hover:bg-red-400 rounded-full p-3' href="#"><FontAwesomeIcon icon={faPhone} className='text-lg mr-2' />Contacto</a>
                        <a className='hover:bg-red-400 rounded-full p-3 ' href="#"> <FontAwesomeIcon icon={faCircleInfo} className='text-lg mr-2' />Quiénes somos</a>
                        <a className='hover:bg-red-400 rounded-full p-3' href="#"> <FontAwesomeIcon icon={faFaceSmile} className='text-lg mr-2' />Login</a>
                    </ul>
                </details>

            </div>
        </nav>
    )
}

export default NavBar