import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className="bg-[#FAF9F6] flex-full text-gray-800 font-sans">
            
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-6">
                    <span className="text-xs font-semibold tracking-widest uppercase text-amber-700">
                        Oază de liniște și natură
                    </span>
                    
                    <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-950 tracking-tight leading-tight">
                        Locul perfect unde timpul se oprește în loc.
                    </h1>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Descoperă o vilă intimă, înconjurată de peisaje de poveste. Oferim confort modern, intimitate deplină și momente de neuitat alături de cei dragi.
                    </p>
                    
                    <div className="pt-4">
                        <Link 
                            to="/inregistreazate" 
                            className="inline-block bg-stone-900 text-stone-100 px-8 py-3.5 rounded-sm font-medium hover:bg-stone-800 transition-colors duration-200"
                        >
                            Rezervă o cameră
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-full h-[350px] bg-stone-200 rounded-sm border border-stone-300 shadow-sm flex flex-col justify-end p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0"></div>
                        
                        <div className="relative z-10 text-white">
                            <h3 className="text-xl font-serif font-semibold">Vila Noastră</h3>
                            <p className="text-sm text-stone-200">Capacitate: 12 persoane • 6 Dormitoare • Piscină privată</p>
                        </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-100/60 -z-10 rounded-sm"></div>
                </div>

            </section>

        </div>
    )
}

export default Index