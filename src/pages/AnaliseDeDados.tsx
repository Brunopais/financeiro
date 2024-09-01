import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnaliseDeDados.css'; // Importando o CSS

interface Acao {
    acao: string;
    preco_atual?: number;
    crescimento_percentual?: number;
    erro?: string;
}

const AnaliseDeDados: React.FC = () => {
    const [acoes, setAcoes] = useState<Acao[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Dados estáticos
    const dadosEstaticos: Acao[] = [
        {
            acao: "ITUB4.SA",
            crescimento_percentual: 42.49028928208669,
            preco_atual: 36.70000076293945
        },
        {
            acao: "PETR3.SA",
            crescimento_percentual: 41.384361744191246,
            preco_atual: 42.939998626708984
        },
        {
            acao: "VALE3.SA",
            crescimento_percentual: 0.2762477229481944,
            preco_atual: 59.58000183105469
        },
        {
            acao: "BBAS3.SA",
            crescimento_percentual: 25.70795773519009,
            preco_atual: 28.1200008392334
        },
        {
            acao: "B3SA3.SA",
            crescimento_percentual: 0.014043848249111238,
            preco_atual: 12.680000305175781
        },
        {
            acao: "MGLU3.SA",
            crescimento_percentual: -55.476535786808924,
            preco_atual: 12.15999984741211
        },
        {
            acao: "SABR3.SA",
            erro: "No data found for SABR3.SA"
        },
        {
            acao: "CSNA3.SA",
            erro: "No data found for CSNA3.SA"
        },
        {
            acao: "RENT3.SA",
            erro: "No data found for RENT3.SA"
        },
        {
            acao: "LREN3.SA",
            erro: "No data found for LREN3.SA"
        }
    ];

    useEffect(() => {
        const fetchAcoes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/analise_acoes');
                setAcoes(response.data);
            } catch (error) {
                setError('Não foi possível carregar os dados da API.');
                setAcoes(dadosEstaticos); // Use os dados estáticos como fallback
            } finally {
                setLoading(false);
            }
        };

        fetchAcoes();
    }, []);

    if (loading) return <p>Carregando dados...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Análise de Dados das Ações</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ação</th>
                        <th>Preço Atual</th>
                        <th>Crescimento Percentual</th>
                        <th>Erro</th>
                    </tr>
                </thead>
                <tbody>
                    {acoes.map((acao, index) => (
                        <tr key={index}>
                            <td>{acao.acao}</td>
                            <td>{acao.preco_atual !== undefined ? acao.preco_atual.toFixed(2) : 'N/A'}</td>
                            <td>{acao.crescimento_percentual !== undefined ? acao.crescimento_percentual.toFixed(2) + '%' : 'N/A'}</td>
                            <td>{acao.erro || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnaliseDeDados;
