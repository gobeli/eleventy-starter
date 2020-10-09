const pluginLocalRespimg = require('eleventy-plugin-local-respimg');

const markdownFilter = require('./src/filters/markdown-filter.js');

module.exports = function (config) {
  // filters
  config.addFilter('markdown', markdownFilter);

  // passthroughtCopies
  config.addPassthroughCopy('static');
  config.addPassthroughCopy('src/content/admin/config.yml');
  config.addPassthroughCopy('src/_includes');

  config.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  });

  config.addWatchTarget('src/scripts/**/*.js');

  config.addPlugin(pluginLocalRespimg, {
    folders: {
      source: '.',
      output: 'dist',
    },
    images: {
      resize: {
        min: 250,
        max: 1750,
        step: 500,
      },
      lazy: true,
      watch: {
        src: 'static/images/**/*',
      }
    }
  });

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
