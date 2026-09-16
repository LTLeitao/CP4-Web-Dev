import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import ActionControls from '../components/ActionControls';

export default function Home() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomMovie = async () => {
    setIsLoading(true);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    
    const randomPage = Math.floor(Math.random() * 50) + 1;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${randomPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setCurrentMovie(data.results[randomIndex]);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  const handleSkip = () => {
    fetchRandomMovie();
  };

  const handleLike = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const isDuplicate = savedFavorites.some((movie) => movie.id === currentMovie.id);
    
    if (!isDuplicate) {
      localStorage.setItem('favorites', JSON.stringify([...savedFavorites, currentMovie]));
    }
    
    fetchRandomMovie();
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Roleta de Descobertas</h1>
      
      {isLoading ? (
        <p>Carregando sugestão...</p>
      ) : (
        <>
          <MovieCard movie={currentMovie} />
          <ActionControls onSkip={handleSkip} onLike={handleLike} />
        </>
      )}
    </div>
  );
}