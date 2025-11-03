import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <div className="w-full flex justify-center py-4 bg-red-700 text-slate-100 shadow-md shadow-emerald-500/20">
        <div className="container flex justify-between text-lg mx-8">
          <Link
            to="/home"
            className="text-4xl font-extrabold text-white tracking-wide  transition-colors duration-200"
          >
            Farma<span className="text-slate-950"> Code</span>
          </Link>

          <div className="flex gap-6  items-center text-slate-50">
            <Link to="/listacategoria" className="hover:text-black transition-colors">Lista de Categorias</Link>
            <Link to="/cadastrarcategoria" className="hover:text-black transition-colors">Cadastrar Categoria</Link>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar