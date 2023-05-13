import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie'>
					<img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"} alt={movie.Title}></img>
					<div className='context'>
						<span>{movie.Year}</span>
						<h3>{movie.Title}</h3>
					</div>
					<div onClick={() => props.handleFavouritesClick(movie)} className=''>
						<FavouriteComponent />
					</div>
					<p>{movie.Ratings}</p>
				</div>
			))}
		</>
	);
};

export default MovieList;
