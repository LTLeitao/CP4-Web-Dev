import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const clearFavorites = () => {
    localStorage.removeItem('favorites');
    setFavorites([]);
  };

  const removeFavorite = (idToRemove) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== idToRemove);
    
    setFavorites(updatedFavorites);
    
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Meus Favoritos</h1>
      
      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>Nenhum filme salvo ainda.</h2>
          <p>Volte para a roleta e comece a dar match nos seus filmes favoritos!</p>
          <Link to="/">
            <button className="btn-primary">
              Ir para a Roleta
            </button>
          </Link>
        </div>
      ) : (
        <>
          <button onClick={clearFavorites} className="btn-danger">
            Limpar Favoritos
          </button>
          
          <div className="favorites-grid">
            {favorites.map((movie, index) => (
              <MovieCard 
                key={`${movie.id}-${index}`} 
                movie={movie} 
                onRemove={removeFavorite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}