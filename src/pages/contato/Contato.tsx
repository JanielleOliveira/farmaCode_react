import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarMensagem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert(`Obrigado pelo contato, ${nome}! Em breve retornaremos sua mensagem.`);
    setNome("");
    setMensagem("");
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white text-center px-6">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Fale Conosco</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Tem alguma dúvida, sugestão ou parceria? Envie sua mensagem — teremos prazer em conversar com você!
      </p>

      <form
        onSubmit={enviarMensagem}
        className="bg-slate-100 rounded-2xl shadow-md p-8 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <textarea
          placeholder="Escreva sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
        ></textarea>

        <button
          type="submit"
          className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-all w-full"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contato;
