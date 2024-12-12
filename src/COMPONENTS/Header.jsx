import React, { useState } from "react";
import "../STYLES/Header.css";

// Definimos a função Header com a props onSearch
function Header({ onSearch }) {
  // searchTerm recebe uma string vazia que podera ser alterada pelo setSearchTerm usando usestate
    const [searchTerm, setSearchTerm] = useState("");

  // Função que a pagina atualize e chama onSearch com o searshTerm definido
    function handleSubmit(e) {
        e.preventDefault();
        onSearch(searchTerm);
    }

  //retorna o html do cabeçalho
    return (
        <header className="header">
            <div className="container">
                <h1>Catálogo de Filmes</h1>
                <nav>
                    <form onSubmit={handleSubmit}>
                        {/*imput para pesquisar filmes na pagina*/}
                        <input
                        type="text"
                        placeholder="Pesquisar"
                        value={searchTerm}
                        onChange={function (e) {
                            setSearchTerm(e.target.value);
                        }}
                        />
                        {/*botão para submitar a busca*/}
                        <button type="submit">Buscar</button>
                    </form>
                </nav>
            </div>
        </header>
    );
    }

//exporta o componente
export default Header;
