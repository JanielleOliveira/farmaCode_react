import { Link } from "react-router-dom";
import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias";

function Home() {
  return (
    <>
      {/* Seção de boas-vindas */}
      <section className="bg-white flex justify-center py-12 border-b">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 text-black">
          
          {/* Texto principal */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-red-700">
            Bem-Vindo(a) à <span className="text-black">FarmaCode</span>!
            </h2>

            <p className="text-lg md:text-xl text-gray-800 font-medium max-w-lg mx-auto md:mx-0">
              Nosso negócio é o <span className="text-red-700 font-semibold">atendimento</span> de <span 
              className="text-red-700 font-semibold">qualidade</span>.  
              Cuidamos de você com tecnologia e confiança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              {/*Botão que leva à página de cadastro */}
              <Link
                to="/cadastroCategoria"
                className="border-2 border-red-700 text-red-700 font-semibold px-6 py-3 rounded-full
                 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                Cadastrar Categoria
              </Link>
              
              {/*Botão que leva à página de cadastro(Falta Implementar)*/}
              <Link
                to="/cadastroProdutos"
                className=" border-2 bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-md
                 hover:bg-white hover:text-red-700 transition-all duration-300"
              >
                Cadastrar Produto
              </Link>

            </div>
          </div>

          {/* Imagem lateral */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://img.freepik.com/vector-premium/icono-capsulas-vitaminas-pastillas-medicamentos-farmaceuticos_1278800-1328.jpg"
              alt="Imagem Página Home"
              className="w-3/4 md:w-2/3 drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Seção de categorias */}
      <section id="categorias" className="bg-slate-50 py-10">
        <ListaCategorias/>
      </section>
    </>
  );
}

export default Home;
