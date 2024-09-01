import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';  // Importe o arquivo CSS

const Menu: React.FC = () => {
    return (
        <nav>
            <ul className="menu">
                <li><Link to="/lista-de-tarefas">Lista de Tarefas</Link></li>
                <li><Link to="/financeiro">Financeiro</Link></li>
                <li><Link to="/quem-eu-sou">Quem Eu Sou</Link></li>
                <li><Link to="/cotacoes-atuais"> Cotações Atuais</Link></li>
                <li><Link to="/analise-de-dados">Análise de Dados</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
