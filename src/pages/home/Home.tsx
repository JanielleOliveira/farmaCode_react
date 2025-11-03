function Home() {
  return (
    <>
      <div className="bg-white flex justify-center text-slate-100">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
                Seja Bem Vindo(a) a Farma Code!
            </h2>
            <p className="text-xl text-black font-medium">
              Nosso negócio: <span className="text-red-700">Atendimento</span> de <span className="text-red-700">Qualidade</span>.
            </p>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.freepik.com/vector-premium/icono-capsulas-vitaminas-pastillas-medicamentos-farmaceuticos_1278800-1328.jpg"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
