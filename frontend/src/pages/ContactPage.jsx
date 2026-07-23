import { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        nume: '',
        email: '',
        subiect: '',
        mesaj: ''
    });

    const [trimis, setTrimis] = useState(false);
    const [eroare, setEroare] = useState(''); // 1. Starea pentru eroare

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEroare(''); // Resetează eroarea la fiecare trimitere

        if (!formData.nume || !formData.email || !formData.subiect || !formData.mesaj) {
            setEroare('Te rog să completezi toate câmpurile!');
            return;
        }

        console.log('Mesaj trimis:', formData);

        setTrimis(true);
        setFormData({ nume: '', email: '', subiect: '', mesaj: '' });

        setTimeout(() => setTrimis(false), 5000);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 font-sans">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md border border-purple-100 space-y-6">

                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Contactează-ne
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Trimite-ne un mesaj și îți vom răspunde în cel mai scurt timp.
                    </p>
                </div>

                {/* 2. Câmpul roșu de eroare (exact ca la Login/Register) */}
                {eroare && (
                    <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200 animate-pulse">
                        {eroare}
                    </div>
                )}

                {trimis && (
                    <div className="rounded-md bg-emerald-50 p-4 text-sm text-emerald-700 border border-emerald-200 flex items-center gap-2 animate-fade-in">
                        Mesajul tău a fost trimis cu succes!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nume complet
                        </label>
                        <input
                            type="text"
                            name="nume"
                            value={formData.nume}
                            onChange={handleChange}
                            placeholder="Ex: Ion Popescu"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
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
                            placeholder="nume@exemplu.com"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Subiect
                        </label>
                        <input
                            type="text"
                            name="subiect"
                            value={formData.subiect}
                            onChange={handleChange}
                            placeholder="Ex: Întrebare despre servicii"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mesajul tău
                        </label>
                        <textarea
                            rows={4}
                            name="mesaj"
                            value={formData.mesaj}
                            onChange={handleChange}
                            placeholder="Scrie mesajul tău aici..."
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full justify-center rounded-md bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                        Trimite Mesajul
                    </button>
                </form>

            </div>
        </div>
    );
}

export default ContactPage;