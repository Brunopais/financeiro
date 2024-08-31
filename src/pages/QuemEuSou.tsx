import React from 'react';
import './QuemEuSou.css'; // Importa o CSS

const QuemEuSou: React.FC = () => {
    return (
        <div className="quem-eu-sou-container">
            <h1>Quem Eu Sou</h1>
            <div className="resumo">
                <p><strong>Resumo:</strong></p>
                <ul>
                    <li>Sou o Bruno, tenho 28 anos.</li>
                    <li>Formado em Engenharia Elétrica.</li>
                    <li>Possuo pós-graduação em Engenharia Clínica.</li>
                    <li>Estou em uma nova fase da minha vida, migrando para a área de programação.</li>
                </ul>
            </div>
        </div>
    );
};

export default QuemEuSou;
