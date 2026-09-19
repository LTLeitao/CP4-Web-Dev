import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);
  const [movieToDelete, setMovieToDelete] = useState(null);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRequestRemove = (movieId) => {
    const movie = favorites.find((item) => item.id === movieId);
    if (movie) setMovieToDelete(movie);
  };

  const confirmRemove = () => {
    if (!movieToDelete) return;
    const updatedFavorites = favorites.filter((item) => item.id !== movieToDelete.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setMovieToDelete(null);
  };

  const cancelRemove = () => {
    setMovieToDelete(null);
  };

  const handleClearAll = () => {
    if (window.confirm('Tem certeza de que deseja remover TODOS os filmes salvos?')) {
      setFavorites([]);
      localStorage.removeItem('favorites');
    }
  };

  return (
    <div className="favorites-page">
      <h1>Seus Filmes Favoritos</h1>

      {favorites.length > 0 && (
        <button onClick={handleClearAll} className="btn-clear-all">
          Limpar Todos
        </button>
      )}

      {favorites.length === 0 ? (
        <p className="empty-message">Nenhum filme salvo nos favoritos ainda.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemove={() => handleRequestRemove(movie.id)}
            />
          ))}
        </div>
      )}

      {movieToDelete && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Remover das Favoritos?</h2>
            <p>
              Deseja remover o filme <strong>"{movieToDelete.title}"</strong> da sua lista?
            </p>
            <div className="modal-actions">
              <button onClick={confirmRemove} className="btn-confirm">
                Sim, Remover
              </button>
              <button onClick={cancelRemove} className="btn-cancel">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favoritos;