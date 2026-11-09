const menuButton = document.getElementById('menuButton');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navigation.classList.remove('open'));
});

const filterButtons = document.querySelectorAll('.filter');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const selectedCategory = button.dataset.filter;
    productCards.forEach(card => {
      const shouldShow = selectedCategory === 'Semua' ||
                         card.dataset.category === selectedCategory;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});
