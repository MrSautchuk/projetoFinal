//Importando funcionalidades do React, funções de renderizaçãoe estilos
import { createRoot } from 'react-dom/client';
import './STYLES/global.css';
import App from './App.jsx';

//creatRoot cria a raiz na div selecionada atraves de sua id e usa .render para renderizar seu conteudo no front-end atravez da div
createRoot(document.getElementById('root')).render(
    <App />
);
