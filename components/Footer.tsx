import { Home, Search, Calendar, User } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 px-4 py-3">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center space-y-1">
          <Home className="w-5 h-5 text-blue-400" />
          <span className="text-xs text-blue-400">Início</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Search className="w-5 h-5 text-gray-400" />
          <span className="text-xs text-gray-400">Buscar</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span className="text-xs text-gray-400">Agendamentos</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <User className="w-5 h-5 text-gray-400" />
          <span className="text-xs text-gray-400">Perfil</span>
        </div>
      </div>
    </footer>
  )
}
