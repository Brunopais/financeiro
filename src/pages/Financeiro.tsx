import React, { useState } from 'react';
import './Financeiro.css'; // Importa o CSS

interface Entrada {
    tipo: 'gasto' | 'ganho';
    descricao: string;
    valor: number;
}

const Financeiro: React.FC = () => {
    const [abaAtiva, setAbaAtiva] = useState<'gastoOuGanho' | 'noQueGastou' | 'valorParaColocar' | 'apagar'>('gastoOuGanho');
    const [tipo, setTipo] = useState<'gasto' | 'ganho'>('gasto');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [entradas, setEntradas] = useState<Entrada[]>([]);

    const handleSalvar = () => {
        if (descricao && valor) {
            setEntradas([...entradas, { tipo, descricao, valor: parseFloat(valor) }]);
            setDescricao('');
            setValor('');
        }
    };

    const totalGanhos = entradas
        .filter(entrada => entrada.tipo === 'ganho')
        .reduce((acc, curr) => acc + curr.valor, 0);

    const totalGastos = entradas
        .filter(entrada => entrada.tipo === 'gasto')
        .reduce((acc, curr) => acc + curr.valor, 0);

    const totalGeral = totalGanhos - totalGastos;

    const renderConteudo = () => {
        switch (abaAtiva) {
            case 'gastoOuGanho':
                return (
                    <div>
                        <label>
                            Tipo:
                            <select value={tipo} onChange={(e) => setTipo(e.target.value as 'gasto' | 'ganho')}>
                                <option value="gasto">Gasto</option>
                                <option value="ganho">Ganho</option>
                            </select>
                        </label>
                    </div>
                );
            case 'noQueGastou':
                return (
                    <div>
                        <label>
                            No que gastou:
                            <input
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </label>
                    </div>
                );
            case 'valorParaColocar':
                return (
                    <div>
                        <label>
                            Valor:
                            <input
                                type="number"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </label>
                        <button onClick={handleSalvar}>Salvar</button>
                    </div>
                );
            case 'apagar':
                return (
                    <div>
                        <button onClick={() => setEntradas([])}>
                            Apagar Todas as Informações
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="financeiro-container">
            <h1>Financeiro</h1>

            <div className="abas-secundarias">
                <button onClick={() => setAbaAtiva('gastoOuGanho')} className={abaAtiva === 'gastoOuGanho' ? 'ativa' : ''}>Gasto ou Ganho</button>
                <button onClick={() => setAbaAtiva('noQueGastou')} className={abaAtiva === 'noQueGastou' ? 'ativa' : ''}>No que Gastou</button>
                <button onClick={() => setAbaAtiva('valorParaColocar')} className={abaAtiva === 'valorParaColocar' ? 'ativa' : ''}>Valor para Colocar</button>
                <button onClick={() => setAbaAtiva('apagar')} className={abaAtiva === 'apagar' ? 'ativa' : ''}>Apagar</button>
            </div>
            <div className="conteudo">
                {renderConteudo()}
                <div className="lista-entradas">
                    <h2>Lista de Entradas</h2>
                    <ul>
                        {entradas.map((entrada, index) => (
                            <li key={index}>
                                <span>{entrada.tipo.toUpperCase()}: </span>
                                <span>{entrada.descricao} - R${entrada.valor.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="totais">
                <h3>Total Ganhos: R${totalGanhos.toFixed(2)}</h3>
                <h3>Total Gastos: R${totalGastos.toFixed(2)}</h3>
                <h3>Total Geral: R${totalGeral.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Financeiro;
