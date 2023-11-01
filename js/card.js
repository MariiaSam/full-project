const cards = document.querySelectorAll('.img-team');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('back');
  });
});