import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CotacoesAtuais.css'; // Importando o CSS

const CotacoesAtuais: React.FC = () => {
    const [criptos, setCriptos] = useState<any[]>([]);

    // Dados fixos para ações com porcentagens
    const melhoresAcoesDoAno = [
        { symbol: 'AAPL', price: '150.00', growth: '15%' },
        { symbol: 'MSFT', price: '300.00', growth: '12%' },
        { symbol: 'TSLA', price: '700.00', growth: '25%' },
    ];

    const pioresAcoesDoAno = [
        { symbol: 'XYZ', price: '10.00', growth: '-8%' },
        { symbol: 'ABC', price: '20.00', growth: '-5%' },
        { symbol: 'DEF', price: '5.00', growth: '-12%' },
    ];

    const acoesDaSemana = [
        { symbol: 'GOOGL', price: '200.00', growth: '7%' },
        { symbol: 'AMZN', price: '320.00', growth: '10%' },
        { symbol: 'NFLX', price: '600.00', growth: '20%' },
    ];

    useEffect(() => {
        const fetchCriptos = async () => {
            try {
                const result = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets',
                    {
                        params: {
                            vs_currency: 'usd',
                            order: 'market_cap_desc',
                            per_page: 10,
                            page: 1,
                        }
                    }
                );
                setCriptos(result.data);
            } catch (error) {
                console.error('Erro ao buscar cotações de criptomoedas:', error);
            }
        };

        fetchCriptos();

        // Atualiza as cotações a cada 5 minutos
        const interval = setInterval(() => {
            fetchCriptos();
        }, 300000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="container">
            <h1>Cotações Atuais</h1>
            <div className="sections">
                <div className="section">
                    <h2>Melhores Ações do Ano</h2>
                    <ul>
                        {melhoresAcoesDoAno.map((acao, index) => (
                            <li key={index}>
                                {acao.symbol}: ${acao.price} <span className={acao.growth.startsWith('-') ? 'negative-growth' : 'positive-growth'}>{acao.growth}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h2>Piores Ações do Ano</h2>
                    <ul>
                        {pioresAcoesDoAno.map((acao, index) => (
                            <li key={index}>
                                {acao.symbol}: ${acao.price} <span className={acao.growth.startsWith('-') ? 'negative-growth' : 'positive-growth'}>{acao.growth}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h2>Ações da Semana</h2>
                    <ul>
                        {acoesDaSemana.map((acao, index) => (
                            <li key={index}>
                                {acao.symbol}: ${acao.price} <span className={acao.growth.startsWith('-') ? 'negative-growth' : 'positive-growth'}>{acao.growth}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="crypto-section">
                <h2>Top 10 Criptomoedas</h2>
                <ul>
                    {criptos.map((cripto, index) => (
                        <li key={index}>
                            {cripto.name} ({cripto.symbol.toUpperCase()}): ${cripto.current_price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CotacoesAtuais;
