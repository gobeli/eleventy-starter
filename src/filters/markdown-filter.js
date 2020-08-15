const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
});

module.exports = function markdown(value) {
  console.log(value);
  return markdownIt.render(value);
};
