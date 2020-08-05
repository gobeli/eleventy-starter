const yaml = require('js-yaml');

const Header = require('./src/_includes/components/Header');
const Intro = require('./src/_includes/components/Intro');

module.exports = function (config) {
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  config.addPassthroughCopy('static');

  config.addShortcode('Intro', Intro);
  config.addShortcode('Header', Header);

  config.addWatchTarget('src/scripts/**/*.js');

  return {
    dir: {
      input: 'src/content',
      output: 'dist',
      data: '../_data',
      includes: '../_includes',
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
