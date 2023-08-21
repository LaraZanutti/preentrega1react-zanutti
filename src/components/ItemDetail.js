import React from 'react'
import { GridLoader } from 'react-spinners'


function ItemDetail({ producto, isLoading }) {
    return (
        isLoading ? <GridLoader color="#fc8181" className='mt-16' /> : (
            <div className="bg-white p-8 mx-auto max-w-3xl rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:pr-6">
                        <img src={producto.image} alt="Product Image" className="w-full h-auto max-h-80 mx-auto rounded-lg" />
                    </div>
                    <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
                        <h1 className="text-3xl font-semibold mb-2 text-center">{producto.title}</h1>
                        <p className="text-2xl text-green-600 mb-4 text-center">{producto.price}</p>
                        <p className="text-gray-800 mb-6 text-center">{producto.description}</p>
                        <div className='justify-center flex items-center'><button className="btn btn-success ">Agregar al carrito</button></div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ItemDetail