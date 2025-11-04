import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";


function FormCategoria() {

  const navigate = useNavigate();
  
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      alert("Erro ao buscar categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) buscarPorId(id);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      }
      navigate("/categorias");
    } catch {
      alert("Erro ao salvar a categoria. Verifique os campos e tente novamente.");
    }
  }

  return (
    <div className="flex justify-center mt-10">
      <form
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
        onSubmit={onSubmit}
      >
        <h1 className="text-2xl font-bold text-center text-red-700 mb-4">
          {id ? "Editar Categoria" : "Cadastrar Categoria"}
        </h1>

        <input
          value={categoria.nome}
          onChange={atualizarEstado}
          name="nome"
          placeholder="Nome"
          className="border border-gray-300 rounded p-2 w-full mb-3"
        />

        <input
          value={categoria.descricao}
          onChange={atualizarEstado}
          name="descricao"
          placeholder="Descrição"
          className="border border-gray-300 rounded p-2 w-full mb-3"
        />

        <button
          type="submit"
          className="bg-red-700 text-white p-2 w-full rounded hover:bg-red-800"
        >
          {id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
