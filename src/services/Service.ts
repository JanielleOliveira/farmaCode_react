/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

const api = axios.create({ 
  baseURL: 'http://localhost:4000' // Url base da API, backend hospedado.
});

// Função responsável por cadastrar novos recursos na API.
export const cadastrar = async (url: string, dados: object, setDados: Function, header: object) => {
    const resposta = await api.post(url, dados, header)// Envia uma requisição POST para a URL especificada com os dados e cabeçalhos fornecidos.
    setDados(resposta.data)
}

// Função responsável por executar todas as operações de busca de recursos na API.
export const buscar = async (url: string, setDados: Function, header: object) => {
    const resposta = await api.get(url, header) // Executa uma requisição GET para a URL especificada com os cabeçalhos fornecidos.
    setDados(resposta.data)
}

// Função responsável por atualizar recursos existentes na API.
export const atualizar = async (url: string, dados: object, setDados: Function, header: object) => {
    const resposta = await api.put(url, dados, header)// Envia uma requisição PUT para a URL especificada com os dados e cabeçalhos fornecidos.
    setDados(resposta.data)// Atualiza o estado com os dados retornados pela API.
}

// Função responsável por deletar recursos na API.
export const deletar = async (url: string, header: object) => { 
    await api.delete(url, header)// Envia uma requisição DELETE para a URL especificada com os cabeçalhos fornecidos.
}