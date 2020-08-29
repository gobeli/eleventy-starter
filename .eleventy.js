const pluginLocalRespimg = require('eleventy-plugin-local-respimg');
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const markdownFilter = require('./src/filters/markdown-filter.js');

const env = new nunjucks.Environment();
env.addFilter('markdown', markdownFilter);

function precompileTemplate(file) {
    return nunjucks.precompile(file, { env, name: file.split('/').slice(2).join('/') })
}

function precompileTemplates() {
  glob('src/_includes/**/*.{njk,css}', (err, files) => {
    if (err) {
      throw err
    }
    const templates = files.map(file => nunjucks.precompile(file, { env, name: file.split('/').slice(2).join('/') }))

    fs.writeFileSync(path.join('dist', 'templates.js'), templates.join('\n'))
  });
}

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

  precompileTemplates();
  config.on('beforeWatch ', () => {
    precompileTemplates();
  });

  return {
    dir: {
      input: 'src/content',
      output: 'dist',
      data: '../_data',
      includes: '../_includes',
      layouts: '../_includes/layouts'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
