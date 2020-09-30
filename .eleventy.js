const pluginLocalRespimg = require('eleventy-plugin-local-respimg');

const markdownFilter = require('./src/filters/markdown-filter.js');

module.exports = function (config) {
  // filters
  config.addFilter('markdown', markdownFilter);

  config.addPassthroughCopy('static');
  config.addPassthroughCopy('src/content/admin/config.yml');
  config.addPassthroughCopy('src/_includes');

  config.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });

  config.addPlugin(pluginLocalRespimg, {
    folders: {
      source: '.',
      output: 'dist',
    },
    images: {
      resize: {
        min: 250,
        max: 1500,
        step: 250,
      },
      sizes: '100vw',
      lazy: true,
      watch: {
        src: 'static/images/**/*',
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
      layouts: '../_includes/layouts'
    },
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
