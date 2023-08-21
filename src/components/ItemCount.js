import { useState } from "react"

function ItemCount({ stock, initial }) {

    const [contador, setContador] = useState(initial)

    const onAdd = () => {
        console.log(contador)
    }

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) setContador(contador - 1)
    }

    return (
        <>
            <div className="flex justify-center gap-4">
                <button className="btn btn-outline btn-error" onClick={restar}>-</button>
                <div className="flex items-center justify-center">
                    <p className="text-white text-center text-2xl align-middle">{contador}</p>
                </div>
                <button className="btn btn-outline btn-success" onClick={sumar}>+</button>

            </div>
            <button className="btn btn-success" onClick={() => onAdd()}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount