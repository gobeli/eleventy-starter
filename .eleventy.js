const yaml = require('js-yaml');

module.exports = function (config) {
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  config.addPassthroughCopy('static');

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
