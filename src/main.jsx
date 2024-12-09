
import { createRoot } from 'react-dom/client';
import './STYLES/global.css';
import App from './App.jsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');
createRoot(document.getElementById('root')).render(
    <App />
);
