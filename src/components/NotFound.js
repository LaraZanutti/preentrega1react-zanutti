import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NotFound() {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center flex-col items-center '>
            <img className='w-2/5' src="/404.png" alt="" />
            <button className="btn btn-warning mb-8" onClick={() => navigate(`/`)}><FontAwesomeIcon icon={faArrowLeft} />Back to home</button>
        </div >
    )
}

export default NotFound