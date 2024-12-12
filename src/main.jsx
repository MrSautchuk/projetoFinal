//importando creatRoot estilos e componente principal
import { createRoot } from "react-dom/client";
import "./STYLES/global.css";
import App from "./App.jsx";

//usando creatRoot para selecionar a div do HTML e renderizar o conteudo do componente principal utilizando DOM
createRoot(document.getElementById("root")).render(<App />);
