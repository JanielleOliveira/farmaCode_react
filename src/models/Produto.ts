import type Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  estoque: number;
  validade: string;
  categoria: Categoria | null; // Relacionamento  entre Produto e Categoria
 
}