import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `relative transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 ${
      location.pathname === path ? "text-black after:w-full" : "text-slate-100"
    }`;

  return (
    <header className="w-full bg-red-700 shadow-md shadow-red-400/40">
      <nav className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform"
        >
          Farma<span className="text-slate-950">Code</span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-10 items-center font-medium">
          <Link to="/sobre" className={linkClasses("/sobre")}>
            Sobre
          </Link>
          <Link to="/contato" className={linkClasses("/contato")}>
            Contato
          </Link>
        </div>

        {/* MENU MOBILE (hamburguer) */}
        <div className="md:hidden">
          <button className="text-white hover:text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m0 6H4"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
