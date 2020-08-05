module.exports = function ({ title, photo }) {
  return `<header class="home-header">
  <img class="home-header__photo" src="${photo}" alt="${title}" />
  <h1 class="home-header__title">${title}</h1>
</header>`;
};
