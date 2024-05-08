document.querySelectorAll('.slide').forEach((slide) => {
  slide.addEventListener('click', function () {
    slide.classList.add('d-none');
    index = parseInt(slide.id.slice(6)) + 1;
    document.getElementById('slide-' + index.toString()).classList.remove('d-none');
  });
});
