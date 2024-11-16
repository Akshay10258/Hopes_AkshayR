import React from 'react'
import { useNavigate } from 'react-router-dom';
const upcoming = () => {
    const navigate = useNavigate();

    const redirect = ()=>{
        navigate('/Events')
    }
    return (
        <div className="border-white border-4 w-[80vw] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mx-auto overflow-auto my-20 p-10 bg-black rounded-lg shadow-xl">
            <section className="hero bg-cover bg-center relative text-white">
                <div className="absolute inset-0 bg-black opacity-50"></div>  {/* Dark overlay */}
                <div className="container text-center relative z-10 py-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Don't Miss Our Upcoming Events!</h1>
                    <p className="text-xl mb-8">Join us for exciting events, festivals, and more.</p>
                    
                    <button onClick={()=>{redirect()}} className="bg-red-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-red-700 transition duration-300">
                        Explore All Events
                    </button>
                    
                </div>
            </section>
        </div>
    )
}

export default upcoming




