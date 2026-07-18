import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/NavBar.jsx"
import Index from './pages/Index.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/register.jsx'


function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Index/>} />

                <Route path="/conecteazate" element={<Login/>} />
                <Route path="/inregistreazate" element={<Register />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App