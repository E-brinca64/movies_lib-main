import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2, } from "react-icons/bi";
import { SiSearxng } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      
      <h2>
        <Link to="/">
          <img src="Logo.png" alt="Logo" />
        </Link>
      </h2>

      <div className="canto">
<div className="textos">
      <p className="Today">Today</p>  
      <p className="Soon">Coming Soon</p>
</div>

      <form onSubmit={handleSubmit} className="pesquisa">
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <h2 className="lupa">
        <SiSearxng />
        </h2>
      </form>

        <h2>
        <Link to="/" className="Usuario">
          <img src="UsuarioUsuario.png" alt="Usuario" />
        </Link>
      </h2>
      
      </div>
    </nav>
  );
};

export default Navbar;
