import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../db/firebase"

const onBuy = async (form, productos, total) => {

    const ventasCollection = collection(db, "ventas")

    const venta = {
        date: serverTimestamp(),
        total,
        buyer: {
            name: form.name,
            phone: form.phone,
            email: form.email,
        },
        items: productos.map(producto => {
            return {
                id: producto.id,
                title: producto.title,
                price: producto.price,
                category: producto.category,
                image: producto.image,
                quantity: producto.cantidad
            }
        })
    }

    try {
        const laVenta = await addDoc(ventasCollection, venta)
        return laVenta
    }
    catch (error) {
        console.log(error)
    }
}

export default onBuy