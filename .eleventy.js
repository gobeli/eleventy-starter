const pluginLocalRespimg = require('eleventy-plugin-local-respimg');
const markdownFilter = require('./src/filters/markdown-filter.js');

module.exports = function (config) {
  // filters
  config.addFilter('markdown', markdownFilter);

  config.addPassthroughCopy('static');
  config.addPassthroughCopy('src/content/admin/config.yml');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

  config.addPlugin(pluginLocalRespimg, {
    folders: {
      source: '.', 
      output: 'dist', 
    },
    images: {
      resize: {
        min: 250, 
        max: 1500,
        step: 150,
      },
      sizes: '100vw',
      lazy: true,
      watch: {
        src: 'static/images/**/*', // Glob of images that Eleventy should watch for changes to
      }
    }
  });

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
