import React from 'react';
import '../STYLES/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Catálogo de Filmes. Todos os direitos reservados.</p>
                <nav>
                    <ul>
                        <li><a href="#privacy">Política de Privacidade</a></li>
                        <li><a href="#terms">Termos de Uso</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
