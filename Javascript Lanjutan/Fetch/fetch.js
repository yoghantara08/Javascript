// Fetch
const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', function () {
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?s=' + inputKeyword.value + '&apikey=846c6911')
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = '';
      movies.forEach((m) => (cards += showCards(m)));

      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;

      // Tombol Detail
      const detailsButton = document.querySelectorAll('.modal-detail');
      detailsButton.forEach((btn) => {
        btn.addEventListener('click', function () {
          const imdbid = this.dataset.imdbid;
          fetch('http://www.omdbapi.com/?i=' + imdbid + '&apikey=846c6911')
            .then((response) => response.json())
            .then((m) => {
              const modalBody = document.querySelector('.modal-body');
              const movieDetail = showMoviesDetail(m);
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

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
