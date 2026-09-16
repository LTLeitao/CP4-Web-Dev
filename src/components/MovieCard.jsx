export default function MovieCard({ movie, onRemove }) {
  if (!movie) return null;

  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : `https://placehold.co/500x750/333333/FFFFFF?text=Sem+Capa`;

  const year = movie.release_date ? movie.release_date.substring(0, 4) : 'Ano desconhecido';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="movie-card">
      {onRemove && (
        <button 
          className="btn-remove-single" 
          onClick={() => onRemove(movie.id)}
          title="Remover dos favoritos"
        >
          X
        </button>
      )}

      <img src={imageUrl} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p><strong>Nota:</strong> {rating} | <strong>Ano:</strong> {year}</p>
        <p className="movie-overview">{movie.overview || 'Sinopse não disponível.'}</p>
      </div>
    </div>
  );
}