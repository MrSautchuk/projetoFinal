import React, { useState } from 'react';
import '../STYLES/Header.css';

// Definimos a função Header com a props onSearch
function Header({ onSearch }) {
    // Estado de pesquisa usando useState
    const [searchTerm, setSearchTerm] = useState('');

    // Função handleSubmit que previne o comportamento padrão do formulário e chama onSearch
    function handleSubmit(e) {
        e.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <header className="header">
            <div className="container">
                <h1>Catálogo de Filmes</h1>
                <nav>
                    {/* Formulário que usa handleSubmit para processar a busca */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            value={searchTerm}
                            onChange={function(e) {
                                setSearchTerm(e.target.value);
                            }}
                        />
                        <button type="submit">Buscar</button>
                    </form>
                </nav>
            </div>
        </header>
    );
}

export default Header;
