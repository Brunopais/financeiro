// src/api.ts
export const fetchAnaliseAcoes = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/analise_acoes');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};
