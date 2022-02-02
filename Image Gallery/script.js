const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    e.preventDefault();
  }
});
