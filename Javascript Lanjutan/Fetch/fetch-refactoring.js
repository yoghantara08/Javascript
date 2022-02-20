// Fetch Refactoring

// Tombol Search di klik
const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', async function () {
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (error) {
    alert(error);
  }
});

// Get Movies
function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?s=' + keyword + '&apikey=846c6911')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === 'False') {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

// Tampil Cards Movie
function updateUI(movies) {
  let cards = '';
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

// Tombol Detail di klik (Event binding)
document.addEventListener('click', async function (e) {
  try {
    if (e.target.classList.contains('modal-detail')) {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    }
  } catch (error) {
    alert(error);
  }
});

// Get Detail
function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?i=' + imdbid + '&apikey=846c6911')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((m) => {
      if (m.Response === 'False') {
        throw new Error(m.Error);
      }
      return m;
    });
}

// Tampil Detail
function updateUIDetail(m) {
  const modalBody = document.querySelector('.modal-body');
  const movieDetail = showMoviesDetail(m);
  modalBody.innerHTML = movieDetail;
}

// Show Cards
function showCards(m) {
  return `<div class="col-md-4 col-6 mt-3">
              <div class="card">
                  <img src="${m.Poster}" class="card-img-top img-fluid" />
                  <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                  </div>
              </div>
          </div>`;
}

// Show Movies
function showMoviesDetail(m) {
  const rating = m.Ratings[0];
  return `<div class="container-fluid">
              <div class="row">
                  <div class="col-md-3">
                  <img src="${m.Poster}" class="img-fluid" />
                  </div>
                  <div class="col-md">
                      <ul class="list-group">
                          <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                          <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                          <li class="list-group-item"><strong>Released : </strong>${m.Released}</li>
                          <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
                          <li class="list-group-item"><strong>Rating : </strong>${rating.Value}</li>
                          <li class="list-group-item"><strong>Plot : </strong><br/>${m.Plot}</li>
                      </ul>
                  </div>
              </div>
          </div>`;
}
