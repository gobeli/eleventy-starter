(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/_includes/components/nav.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<nav class=\"navigation\" id=\"navigation\">\r\n  <div class=\"navigation__main\">\r\n    <a href=\"#\" class=\"navigation__link\">Test</a>\r\n    <a href=\"#\" class=\"navigation__link\">Test 2</a>\r\n  </div>\r\n  <a href=\"#\" class=\"navigation__link navigation__link--mobile\" id=\"navigation-toggle\">\r\n    <svg viewBox=\"0 0 100 80\" width=\"25\" height=\"25\">\r\n      <rect width=\"100\" height=\"10\"></rect>\r\n      <rect y=\"35\" width=\"100\" height=\"10\"></rect>\r\n      <rect y=\"70\" width=\"100\" height=\"10\"></rect>\r\n    </svg>\r\n  </a>\r\n</nav>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/_includes/layouts/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Document</title>\r\n    <style>\r\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("critical.css", false, "src/_includes/layouts/base.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n    </style>\r\n    <link rel=\"stylesheet\" href=\"/app.css\" />\r\n  </head>\r\n  <body>\r\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("components/nav.njk", false, "src/_includes/layouts/base.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n    <main class=\"page\">\r\n      ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\r\n    </main>\r\n    <script src=\"/app.js\"></script>\r\n  </body>\r\n</html>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/content/index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "---\r\nlayout: layouts/base\r\n---\r\n\r\n<div>\r\n  <header class=\"home-header\">\r\n    <img class=\"home-header__photo\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "home")),"photo"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "home")),"title"), env.opts.autoescape);
output += "\" />\r\n    <h1 class=\"home-header__title\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "home")),"title"), env.opts.autoescape);
output += "</h1>\r\n  </header>\r\n  <div class=\"home-intro\">\r\n    <div class=\"home-intro__text\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, env.getFilter("markdown").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "home")),"intro"))), env.opts.autoescape);
output += "</div>\r\n  </div>\r\n</div>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
