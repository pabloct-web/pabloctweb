"use client"

import { Wifi, Car, Scissors, Shield, Clock, Search, Calendar, User } from "lucide-react"

export default function Page() {
  const services = [
    { name: "1° corte", price: "R$ 30,00", duration: "45 min", icon: "✂️" },
    { name: "Barba", price: "R$ 25,00", duration: "30 min", icon: "🧔" },
    { name: "Corte hindu", price: "R$ 40,00", duration: "30 min", icon: "✂️" },
    { name: "Corte", price: "R$ 50,00", duration: "45 min", icon: "✂️" },
    { name: "Corte e barba", price: "R$ 60,00", duration: "60 min", icon: "💈" },
  ]

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Header Navigation */}
      <header className="bg-zinc-800 px-4 py-3">
        <nav className="flex space-x-6 text-sm">
          <button className="text-blue-400 border-b-2 border-blue-400 pb-1">Serviços</button>
          <button className="text-gray-400 hover:text-white">Profissionais</button>
          <button className="text-gray-400 hover:text-white">Fidelidade</button>
          <button className="text-gray-400 hover:text-white">Produtos</button>
          <button className="text-gray-400 hover:text-white">Pacotes</button>
          <button className="text-gray-400 hover:text-white">Assinatura</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        {/* Welcome Message */}
        <p className="text-gray-300 text-sm mb-6">Temos um atendimento único e autêntico!</p>

        {/* Comodidades Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Comodidades</h2>
          <p className="text-gray-400 text-sm mb-4">Clique no item para obter informações</p>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-center justify-center h-20">
              <Wifi className="w-6 h-6 text-gray-400" />
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-center justify-center h-20">
              <Car className="w-6 h-6 text-gray-400" />
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-center justify-center h-20">
              <Scissors className="w-6 h-6 text-gray-400" />
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-center justify-center h-20">
              <Shield className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Serviços</h2>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full bg-zinc-800 text-white pl-10 pr-4 py-3 rounded-lg border-none outline-none"
            />
          </div>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center">
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{service.price}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                  Agendar
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-zinc-800 px-4 py-3">
        <nav className="flex justify-around">
          <button className="flex flex-col items-center space-y-1 text-blue-400">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Início</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <Search className="w-5 h-5" />
            <span className="text-xs">Buscar</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Agendamentos</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </button>
        </nav>
      </footer>
    </div>
  )
}
