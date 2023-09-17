import React from 'react'
import { NavLink } from 'react-router-dom'

function WhoWereAre() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.creativefabrica.com/wp-content/uploads/2022/05/17/Futuristic-Red-Blue-Background-Design-Graphics-30683310-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className='border-x-2 border-b-2 border-error m-8 w-3/5 rounded-2xl shadow-md shadow-error'>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-10xl">
                        <h1 className="mb-8 text-5xl font-bold">Hello there, Welcome to our virtual store!</h1>
                        <p className="mb-10">We want to share with you the exciting history and fundamental values that have led us to become a reference in the world of online commerce. At our company, we strongly believe in innovation and providing an exceptional shopping experience to our customers. From the moment we began our journey, we have been committed to the goal of offering high-quality products and exceptional services to satisfy all your needs. Our team is made up of passionate experts in the sector, who work hard to carefully select the products we offer in our virtual store. We strive to bring you a wide variety of items from the most renowned brands and most trusted manufacturers, ensuring that each product meets our rigorous quality standards. In addition to the quality of our products, we pride ourselves on providing excellent customer service. We're here to support you at every stage of your shopping experience, from answering product questions to providing personalized recommendations to meet your specific needs. Your satisfaction is our top priority. As a virtual store, we also care about the environment and strive to be a sustainable company. We're constantly looking for ways to reduce our impact on the planet, from using recyclable packaging to collaborating with suppliers committed to eco-friendly practices. We want to thank you for visiting our virtual store and trusting us to satisfy your online shopping needs. We are excited to have you as part of our community and look forward to providing you with an exceptional shopping experience. If you have any questions, please feel free to contact our customer service team. We are here to help you with everything you need. Thank you for choosing us and we hope you enjoy your shopping experience in our virtual store! Sincerely, The LariZtore Team</p>
                        <NavLink to="/" ><button className="btn btn-outline btn-error">Get Started</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWereAre