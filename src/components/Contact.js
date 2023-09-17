import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Contact() {
    const navigate = useNavigate();


    const handleSend = () => {
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
            title: `Thank you for contacting us. We will communicate soon`
        })
        navigate("/")
    }


    return (
        <div className="flex flex-col justify-start items-center mb-8" >
            <div className='flex flex-col justify-center items-center mt-14'></div>
            <div className='flex flex-col justify-center items-center bg-slate-800 rounded-xl shadow-xl shadow-blue-100/20 p-6 w-1/3'>
                <div className="badge badge-success gap-2 mt-8 text-xl p-4 badge-outline text-2xl font-semibold flex justify-center"><FontAwesomeIcon icon={faPhone} className='text-lg mr-2' />CONTACT US</div>
                <form>
                    <div className="mb-4 mt-10">
                        <label htmlFor="name" className="block text-white font-medium mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4 mt-10">
                        <label htmlFor="lastname" className="block text-white font-medium mb-2">Last name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="mb-4 mt-10">
                        <label htmlFor="email" className="block text-white font-medium mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                            placeholder="Email"

                        />
                    </div>
                    <div className="mb-4 mt-10">
                        <label htmlFor="phone" className="block text-white font-medium mb-2">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                            placeholder="Phone"

                        />
                    </div>
                    <div className="mb-4 mt-10">
                        <label htmlFor="order" className="block text-white font-medium mb-2">Order number:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400"
                            placeholder="Order number"
                        />
                    </div>
                    <div className="mb-4 mt-10">
                        <label htmlFor="message" className="block text-white font-medium mb-2">Message:</label>
                        <textarea className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-red-400" placeholder="Message"></textarea>
                    </div>
                    <div className='mb-4 mt-10 flex flex-col justify-center'>
                        <button className="btn btn-outline btn-success" onClick={handleSend}>Send</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact