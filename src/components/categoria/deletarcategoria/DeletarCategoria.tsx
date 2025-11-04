import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>();

  async function buscarCategoria() {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      alert("Erro ao buscar categoria para exclusão.");
    }
  }

  useEffect(() => {
    if (id !== undefined) buscarCategoria();
  }, [id]);

  async function confirmarExclusao() {
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria deletada com sucesso!");
      navigate("/categorias");
    } catch {
      alert("Erro ao deletar categoria. Tente novamente.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 ">
      <h1 className="text-2xl font-bold text-red-700 mb-4">
        Deseja deletar esta categoria?
      </h1>
      <p className="text-2xl font-bold text-gray-700 mb-6">{categoria?.nome}</p>

      <div className="flex gap-4">
        <button
          onClick={confirmarExclusao}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Sim
        </button>
        <button
          onClick={() => navigate("/categorias")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Não
        </button>
      </div>
    </div>
  );
}

export default DeletarCategoria;
