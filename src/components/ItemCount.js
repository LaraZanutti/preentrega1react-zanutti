import { useState } from "react"

function ItemCount({ stock = 5, initial = 1, onAdd, qtyColor, btnMargin }) {

    const [contador, setContador] = useState(initial)


    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) setContador(contador - 1)
    }

    const handleClick = () => {
        onAdd(contador)
    }

    return (
        <>
            <div className="flex justify-center gap-4 mb-2">
                <button className="btn btn-outline btn-error" onClick={restar}>-</button>
                <div className="flex items-center justify-center">
                    <p className={`${qtyColor} text-center text-2xl align-middle`}>{contador}</p>
                </div>
                <button className="btn btn-outline btn-success" onClick={sumar}>+</button>

            </div>
            <div className={`${btnMargin} flex justify-center`}>
                <button className="btn btn-success" onClick={handleClick}>Add to cart</button>
            </div>
        </>
    )
}

export default ItemCount