module.exports = class Index {
  data() {
    return {
      layout: 'layout.njk',
    };
  }

  render({ home }) {
    return `<div>
  <header class="home-header">
    <img class="home-header__photo" src="${home.photo}" alt="${home.title}" />
    <h1 class="home-header__title">${home.title}</h1>
  </header>
  <div class="home-intro">
    <div class="home-intro__text">${home.intro}</div>
  </div></div>`;
  }
};
