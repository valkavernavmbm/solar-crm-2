import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import KitsSolares from './pages/KitsSolares';
import Propostas from './pages/Propostas';
import Vendas from './pages/Vendas';
import PropostaDetalhe from './pages/PropostaDetalhe';
import PortalCliente from './pages/PortalCliente';adding: '20px', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: configuracao.corPrimaria || 'var(--accent-primary)', marginBottom: '30px', fontSize: '1.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{nomeCurto} CRM</h2>h2>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                              <a href="/dashboard" className="btn btn-secondary" style={{ justifyContent: 'flex-start', border: 'none', background: 'transparent', color: window.location.pathname === '/dashboard' ? configuracao.corPrimaria : '' }}>Dashboard</a>a>
                              <a href="/clientes" className="btn btn-secondary" style={{ justifyContent: 'flex-start', border: 'none', background: 'transparent', color: window.location.pathname === '/clientes' ? configuracao.corPrimaria : '' }}>
import Configuracoes from './pages/Configuracoes';
import ContratoDetalhe from './pages/ContratoDetalhe';
import Assinaturas from './pages/Assinaturas';
import FunilVendas from './pages/FunilVendas';
import { Settings, Key, LogOut } from 'lucide-react';
import useCrmStore from './store/crmStore';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { configuracao, logout, userPerfil } = useCrmStore();
    const nomeCurto = configuracao?.nomeEmpresa?.split(' ')[0] || 'Solar';

    const handleLogout = async () => {
          await logout();
          window.location.href = '/login';
    };
};

  return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
                <aside className="glass-panel" style={{ width: '250px', p
