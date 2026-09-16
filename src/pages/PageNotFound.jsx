import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>Parece que você se perdeu.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}