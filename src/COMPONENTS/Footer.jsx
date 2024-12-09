//importando a biblioteca do React e o estilo do rodapé
import React from 'react';
import '../STYLES/Footer.css';

//Footer salva a função que retorna todo o html do rodapé
const Footer = function() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Catálogo de Filmes. Todos os direitos reservados.</p>
                <nav>
                    <ul>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

//exportando o componente
export default Footer;
