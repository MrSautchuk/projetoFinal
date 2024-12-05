import React, { useState } from 'react';
import '../STYLES/Header.css';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <header className="header">
            <div className="container">
                <h1>Catálogo de Filmes</h1>
                <nav>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">Buscar</button>
                    </form>
                </nav>
            </div>
        </header>
    );
};

export default Header;
