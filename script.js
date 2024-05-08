const slides = document.querySelectorAll('.slide');

var count = 1;
slides.forEach((slide) => {
  slide.addEventListener('click', function () {
    slide.classList.add('d-none');
    document.getElementById('slide-' + (count + 1)).classList.remove('d-none');
  });
  count++;
});
