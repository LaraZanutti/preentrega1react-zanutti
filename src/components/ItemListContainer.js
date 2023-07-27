import React from 'react'

function ItemListContainer(props) {
    console.log(props)
    return (
        <div className="flex justify-center">
            <p className='hover:bg-red-400 rounded-full text-white w-1/2 p-10 m-5 text-lg text-center font-bold'>
                {props.producto}
            </p>
        </div>
    )
}

export default ItemListContainer