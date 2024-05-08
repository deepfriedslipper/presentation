var count = 2;
document.querySelectorAll('.slide').forEach((slide) => {
  slide.addEventListener('click', function () {
    slide.classList.add('d-none');
    document.getElementById('slide-' + count.toString()).classList.remove('d-none');
  });
  count++;
});
