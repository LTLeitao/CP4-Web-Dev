import { Outlet, Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="layout-container">
      
      <header className="app-header">
        <h2>Roleta TMDB</h2>
        <nav className="nav-links">
          <Link to="/">Roleta</Link>
          <Link to="/favoritos">Meus Favoritos</Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Projeto Acadêmico. MVP desenvolvido com React e Vite.</p>
      </footer>
      
    </div>
  );
}