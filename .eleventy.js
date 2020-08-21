const markdownFilter = require('./src/filters/markdown-filter.js');

module.exports = function (config) {
  // filters
  config.addFilter('markdown', markdownFilter);

  config.addPassthroughCopy('static');
  config.addPassthroughCopy('src/content/admin/config.yml');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

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
