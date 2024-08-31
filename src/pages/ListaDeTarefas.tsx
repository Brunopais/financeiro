import React, { useState } from 'react';
import './ListaDeTarefas.css'; // Importa o CSS

interface Tarefa {
    descricao: string;
    concluida: boolean;
}

const ListaDeTarefas: React.FC = () => {
    const [descricao, setDescricao] = useState('');
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    const handleAdicionar = () => {
        if (descricao) {
            setTarefas([...tarefas, { descricao, concluida: false }]);
            setDescricao('');
        }
    };

    const handleConcluir = (index: number) => {
        const novasTarefas = tarefas.map((tarefa, i) =>
            i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );
        setTarefas(novasTarefas);
    };

    const handleExcluir = (index: number) => {
        const novasTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(novasTarefas);
    };

    return (
        <div className="lista-tarefas-container">
            <h1>Lista de Tarefas</h1>
            <div className="entrada-tarefa">
                <label>
                    Descrição:
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </label>
                <button onClick={handleAdicionar}>Adicionar Tarefa</button>
            </div>
            <div className="tarefas-lista">
                <ul>
                    {tarefas.map((tarefa, index) => (
                        <li key={index} className={tarefa.concluida ? 'concluida' : ''}>
                            <span onClick={() => handleConcluir(index)}>
                                {tarefa.descricao}
                            </span>
                            <button onClick={() => handleExcluir(index)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListaDeTarefas;
