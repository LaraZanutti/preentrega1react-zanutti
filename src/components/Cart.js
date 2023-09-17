import { useContext, useEffect, useMemo, useState } from "react";
import CartContext from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashCan, faEye, faArrowLeft, faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import onBuy from "../services/orderService";
import Swal from 'sweetalert2'


function Cart() {
    const navigate = useNavigate();

    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState([]);
    const [editMode, setEditMode] = useState(true)
    const [form, setForm] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { productos, removeItem, clearCart, updateItem, addItem } = useContext(CartContext);

    const disabledButton = useMemo(() => {
        return !Boolean(form.name && form.phone && form.email)
    }, [form])

    const selectAll = (e) => {
        if (e.target.checked) {
            setSelected(productos.map(producto => producto.id));
        } else {
            setSelected([]);
        }
    }

    const select = (id) => {
        if (selected.includes(id)) {
            setSelected(
                selected.filter(prodId => prodId !== id)
            );
        } else {
            setSelected([...selected, id]);
        }
    }

    const sumar = (id) => {
        updateItem(id, 1);
        calcularTotal();
    }

    const restar = (id) => {
        updateItem(id, -1);
        calcularTotal();
    }

    const removeItems = () => {
        selected.forEach(id => {
            removeItem(id);
        });
        setSelected([]);
        calcularTotal()
    }

    const calcularTotal = () => {
        setTotal(productos.reduce((acc, producto) => {
            const subtotal = producto.price * producto.cantidad;
            return acc + subtotal;
        }, 0));
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    const handleBuy = async () => {
        setIsLoading(true)
        const res = await onBuy(form, productos, total)
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: `Thanks for your purchase`
        })
        navigate(`/checkout/${res.id}`)
        clearCart()
    }

    useEffect(() => {
        calcularTotal();
    }, [productos]);

    const hayProductos = productos.length > 0;

    return (
        <div>
            {hayProductos ? (
                <div className={`overflow-x-auto flex justify-center items-center p-8 gap-16 ${editMode && 'flex-col'}`}>
                    <table className={`table-lg ${editMode ? 'w-10/12' : 'w-1/2'}`}>
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" disabled={!editMode} className="checkbox" onChange={selectAll} />
                                    </label>
                                </th>
                                <th className="text-start">Item</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, i) => {
                                return (
                                    <tr className="hover" key={i}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" disabled={!editMode} checked={selected.includes(producto.id)} onChange={() => select(producto.id)} />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={producto.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{producto.title}</div>
                                                    <div className="text-sm opacity-50">{producto.category}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-outline btn-xs mr-1 btn-error" disabled={!editMode} onClick={() => restar(producto.id)}>-</button>
                                            {producto.cantidad}
                                            <button className="btn btn-outline btn-xs ml-1 btn-success" disabled={!editMode} onClick={() => sumar(producto.id)}>+</button>
                                            <br />
                                        </td>
                                        <td className="text-center">$ {producto.price}</td>
                                        <th className="text-center">
                                            <button disabled={!editMode} onClick={() => removeItem(producto.id)} className="btn btn-xs btn-error text-white mr-2"><FontAwesomeIcon icon={faTrash} /></button>
                                            <button disabled={!editMode} onClick={() => navigate(`/producto/${producto.id}`)} className="btn btn-xs btn-info text-white"><FontAwesomeIcon icon={faEye} /></button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th colSpan={2} className="text-end text-center text-green-800 text-2xl">Total: ${total.toFixed(2)} </th>
                            </tr>
                        </tfoot>

                    </table>
                    {editMode ? <div className="flex  p-8 ">
                        <button onClick={selected.length ? removeItems : clearCart} className="btn btn-error text-white m-2"><FontAwesomeIcon icon={faTrashCan} />{selected.length ? `Delete ${selected.length} items from cart` : "Clear cart"}</button>
                        <button onClick={() => setEditMode(false)} className="btn btn-success text-white m-2" ><FontAwesomeIcon icon={faCheck} />Complete order</button>
                    </div> :
                        <div className="flex flex-col justify-start items-center" >
                            <div className='flex flex-col justify-center items-center mt-14'>
                                <div className="flex flex-col justify-center items-center bg-slate-800 rounded-xl shadow-xl shadow-blue-300/20 p-6 w-80">
                                    <h2 className="text-2xl font-semibold flex justify-center text-white">Personal Information</h2>
                                    <form>
                                        <div className="mb-4 mt-14">
                                            <label htmlFor="name" className="block text-white font-medium mb-2">Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                                                placeholder="Name"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-white font-medium mb-2">Email:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                                                placeholder="Email"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="phone" className="block text-white font-medium mb-2">Phone:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 justify-center items-center w-full">
                                <button onClick={() => setEditMode(true)} className="btn btn-info text-white m-2 mt-8"><FontAwesomeIcon icon={faPencil} />Edit Cart</button>
                                <button
                                    type="submit"
                                    className="btn btn-block bg-success text-white py-2 px-4 rounded-lg hover:bg-green-800 focus:outline-none"
                                    disabled={disabledButton}
                                    onClick={handleBuy}>
                                    {isLoading ? <span className="loading loading-spinner">Loading</span> : <><FontAwesomeIcon icon={faCheck} />Finish order</>}
                                </button>
                            </div>
                        </div>
                    }
                </div>) : (
                <h2 className="flex justify-center text-white p-20 text-3xl font-bold">No products</h2>
            )}
            <div className={`${editMode ? 'flex' : 'hidden'} justify-center p-4`}>
                <button className="btn btn-warning mb-8" onClick={() => navigate(`/`)}><FontAwesomeIcon icon={faArrowLeft} />Back to home</button></div>
        </div>
    );


}
export default Cart