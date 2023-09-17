import { createContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [rerender, setRerender] = useState(false)

    const updateItem = (id, cantidadNueva) => {
        let productosCopy = productos
        const producto = productosCopy.find(producto => producto.id === id)
        producto.cantidad += cantidadNueva
        if (producto.cantidad === 0) {
            removeItem(id)
            return
        }
        setProductos(productosCopy)
        setRerender(!rerender)
    }

    const addItem = (producto, cantidad) => {
        const productoExistente = productos.find(prod => prod.id === producto.id)
        if (productoExistente) {
            updateItem(productoExistente.id, cantidad)
            return
        }
        const productoCantidad = { ...producto, cantidad }
        setProductos([
            ...productos,
            productoCantidad
        ])
    }

    const removeItem = (id) => {
        const productosCopy = productos
        const indexDelete = productos.findIndex(producto => producto.id === id) // productos[indexDelete] 
        productosCopy.splice(indexDelete, 1)
        setProductos(productosCopy)
        setRerender(!rerender)
    }

    const clearCart = () => {
        setProductos([])
    }


    return (
        <CartContext.Provider value={{ productos, addItem, removeItem, clearCart, updateItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext