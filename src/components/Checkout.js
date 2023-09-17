import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { GridLoader } from 'react-spinners'
import { db } from '../db/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FormCard = () => {
    const [orden, setOrden] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        getOrden()
    }, [])

    const date = orden?.date?.toDate()
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    const formattedDate = date?.toLocaleDateString('es-ES', options)

    const getOrden = async () => {
        try {
            const ordenCollection = collection(db, "ventas")
            const ordenPorId = doc(ordenCollection, params.id)
            const consulta = await getDoc(ordenPorId)
            setOrden(consulta.data())
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        isLoading ? <div className='flex justify-center'><GridLoader color="#fc8181" className='mt-16' /></div> :
            <div className='flex justify-center'> {isLoading ? <span className="loading loading-spinner">Loading</span> :
                <div className='border-x-2 border-b-2 border-success m-8 w-3/5 rounded-2xl shadow-lg shadow-success'>
                    <div className="overflow-x-auto flex flex-col justify-center items-center">
                        <div className="alert alert-success w-full rounded-b-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Your purchase has been confirmed! You will receive the instructions for products shipping to your email: <b>{orden.buyer.email}</b></span>
                        </div>
                        <div className="badge badge-success badge-outline text-success gap-2 mt-8 text-xl p-4">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            Order number: {params.id}
                        </div>
                        <table className="table-lg w-10/12">
                            <thead>
                                <tr>
                                    <th className="text-start">Item</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orden.items.map((item, i) => {
                                    return (
                                        <tr className="hover" key={i}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{item.title}</div>
                                                        <div className="text-sm opacity-50">{item.category}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                {item.quantity}
                                                <br />
                                            </td>
                                            <td className="text-center">$ {item.price}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                        <div className="divider my-12">
                            <div className='text-5xl text-success font-bold '>
                                Total: $ {orden.total}
                            </div>
                        </div>

                        <div className="p-4 w-1/2 flex justify-center flex-col align-center mb-16">
                            <div className='flex justify-between '>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                        <img src={`https://i.pravatar.cc/${Math.floor(Math.random() * 1000) + 1}`} />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className='text-3xl'>{orden.buyer.name}</span>
                                    <span>{orden.buyer.email}</span>
                                    <span>{orden.buyer.phone}</span>
                                    <span>{formattedDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
    );
};

export default FormCard;