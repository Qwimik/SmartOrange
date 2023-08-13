document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;
    const elemPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elemPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
