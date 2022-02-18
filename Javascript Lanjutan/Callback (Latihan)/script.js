$('.search-btn').on('click', function () {
  $.ajax({
    url: 'http://www.omdbapi.com/?s=' + $('.input-keyword').val() + '&apikey=846c6911',
    success: (results) => {
      const movies = results.Search;
      let cards = '';
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $('.movie-container').html(cards);

      // Tombol Detail
      $('.modal-detail').on('click', function () {
        $.ajax({
          url: 'http://www.omdbapi.com/?i=' + $(this).data('imdbid') + '&apikey=846c6911',
          success: (m) => {
            const movieDetail = showMoviesDetail(m);
            $('.modal-body').html(movieDetail);
          },
          error: () => {
            alert('Data tidak ditemukan');
          },
        });
      });
    },
    error: () => {
      alert('Data tidak ditemukan');
    },
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
