import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  
  return (
    
    <div className="bg-slate-200 p-6 rounded-2xl shadow-md flex flex-col justify-between border border-red-700">
      <div>
        <h3 className="text-2xl font-bold text-red-700 mb-2 text-center">
          {categoria.nome}
        </h3>
        <p className="text-black text-center">{categoria.descricao}</p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="bg-red-700 text-slate-100 px-4 py-2 rounded-md hover:bg-red-800 transition"
        >
          Editar
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="bg-black text-slate-100 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
