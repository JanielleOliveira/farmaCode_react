/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";


function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Erro ao carregar as categorias. Tente novamente.");
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="container mx-auto my-9">
      <h1 className="border-2 hover: bg-red-700 text-3xl font-bold text-center mb-6 text-white">
        Categorias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categorias.length > 0 ? (
          categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            Nenhuma categoria cadastrada.
          </p>
        )}
      </div>
    </div>
  );
}

export default ListaCategorias;
