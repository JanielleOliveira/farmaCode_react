/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000", // ajuste se seu backend estiver em outra porta
});

export const buscar = async (url: string, setDado: Function) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

export const cadastrar = async (url: string, dados: any, setDado: Function) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data);
};

export const atualizar = async (url: string, dados: any, setDado: Function) => {
  const resposta = await api.put(url, dados); // o id vem no body
  setDado(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};
