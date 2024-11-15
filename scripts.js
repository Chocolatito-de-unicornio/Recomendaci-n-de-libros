document.addEventListener("DOMContentLoaded", () => {
  const genreSelect = document.getElementById("genre");
  const movieTitle = document
    .getElementById("movie-title")
    .querySelector("span");
  const movieGenre = document
    .getElementById("movie-genre")
    .querySelector("span");
  const movieDescription = document
    .getElementById("movie-description")
    .querySelector("span");

  genreSelect.addEventListener("change", (event) => {
    const selectedGenre = event.target.value;
    // Aquí puedes agregar lógica para obtener la información de la película basada en el género seleccionado
    // Por ejemplo, podrías hacer una llamada a una API o buscar en un objeto local
    const movieInfo = getMovieInfoByGenre(selectedGenre);
    movieTitle.textContent = movieInfo.title;
    movieGenre.textContent = movieInfo.genre;
    movieDescription.textContent = movieInfo.description;
  });

  function getMovieInfoByGenre(genre) {
    // Ejemplo de datos de películas
    const movies = {
      ficcion: {
        title: "Película de Ficción",
        genre: "Ficción",
        description: "Descripción de la película de ficción.",
      },
      "no-ficcion": {
        title: "Película de No Ficción",
        genre: "No Ficción",
        description: "Descripción de la película de no ficción.",
      },
      misterio: {
        title: "Película de Misterio",
        genre: "Misterio",
        description: "Descripción de la película de misterio.",
      },
      fantasia: {
        title: "Película de Fantasía",
        genre: "Fantasía",
        description: "Descripción de la película de fantasía.",
      },
      "ciencia-ficcion": {
        title: "Película de Ciencia Ficción",
        genre: "Ciencia Ficción",
        description: "Descripción de la película de ciencia ficción.",
      },
    };
    return movies[genre];
  }
});
