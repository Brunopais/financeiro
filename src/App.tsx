import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ListaDeTarefas from './pages/ListaDeTarefas';
import Financeiro from './pages/Financeiro';
import QuemEuSou from './pages/QuemEuSou';
import CotacoesAtuais from './pages/CotacoesAtuais';
import AnaliseDeDados from './pages/AnaliseDeDados';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/lista-de-tarefas" element={<ListaDeTarefas />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/quem-eu-sou" element={<QuemEuSou />} />
        <Route path="/cotacoes-atuais" element={<CotacoesAtuais />} /> {/* Nova rota */}
        <Route path="/analise-de-dados" element={<AnaliseDeDados />} />
      </Routes>
    </Router>
  );
};

export default App;
