import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";    
function AuthContent() {

const [esteLogat, setEsteLogat] = useState(false)
    localStorage.setItem('token',1)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setEsteLogat(true)
        }
    }, [])

    return (
    <>
        {!esteLogat && (
    
            <>
                <Link to="/conecteazate">Conecteazate</Link>
                <Link to="/inregistreazate">Inregistreazate</Link>
            </>
        )}
        {esteLogat && (
            
            <button className='px-4 py-1 text-white scale-95 hover:scale-100 transition ease-in-out duration-300 bg-red-500 hover:bg-red-700 ml-auto rounded-2xl'
            onClick={() => {
                localStorage.removeItem('token')
                setEsteLogat(false)
            }}>
                Iesi din cont
            </button>
        )}
    </>
)

}

export default AuthContent