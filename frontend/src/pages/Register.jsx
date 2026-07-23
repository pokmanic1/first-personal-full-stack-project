import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../utility/axios';

function Register() {
    const [formData, setFormData] = useState({
        nume: '',
        email: '',
        parola: ''
    });

    const [eroare, setEroare] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.nume || !formData.email || !formData.parola) {
            setEroare('Te rog să completezi toate câmpurile!');
            return;
        }

        if (formData.parola.length < 6) {
            setEroare('Parola trebuie să aibă cel puțin 6 caractere!');
            return;
        }


        try {
            const response = await instance.post('/auth/register', {
                name: formData.nume,
                email: formData.email,
                password: formData.parola
            }).catch(err=>console.log('RAW:',err));

            console.log('Înregistrare reușită:', response.data);
            navigate('/');

        } catch (err) {
            console.log('Eroare prinsă în catch:', err);

            const mesajBackend = err.response?.data?.message || 'A apărut o eroare la înregistrare!';

            setEroare(mesajBackend);
        }



        console.log('Date trimise:', formData);

    };

    return (
        <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md border border-gray-100">
                <div>
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                        Creare Cont Nou
                    </h2>
                </div>

                {eroare && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200 animate-pulse">
                        {eroare}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nume complet
                            </label>
                            <input
                                type="text"
                                name="nume"
                                value={formData.nume}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                                placeholder="Ex: Dumitru Popescu"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Adresă de Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                                placeholder="nume@exemplu.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Parolă
                            </label>
                            <input
                                type="password"
                                name="parola"
                                value={formData.parola}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                                placeholder="Minim 6 caractere"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-purple-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                            Înregistrare
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;