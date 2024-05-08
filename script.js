const slides = document.querySelectorAll('.slide');

var count = 2;
slides.forEach((slide) => {
  slide.addEventListener('click', function () {
    slide.classList.add('d-none');
    document.getElementById('slide-' + count.toString()).classList.remove('d-none');
  });
  count++;
});
