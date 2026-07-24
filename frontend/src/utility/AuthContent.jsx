import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import instance from './axios';

function AuthContent() {
    const [esteLogat, setEsteLogat] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        instance.get('/auth/middle')
            .then(() => {
                setEsteLogat(true)
            })
            .catch(() => {
                setEsteLogat(false)
            })
    }, [location.pathname])

    const handleLogout = async () => {
        try {
            await instance.post('/auth/logout')
        } catch (err) {
            console.log('Eroare la logout:', err)
        }
        setEsteLogat(false)
        navigate('/')
    }

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
                    onClick={handleLogout}>
                    Iesi din cont
                </button>
            )}
        </>
    )
}

export default AuthContent