import markdownFilter from '../filters/markdown-filter';

const env = nunjucks.configure();

env.addFilter('markdown', markdownFilter);

const Preview = ({ entry, path, context }) => {
  const data = context(entry.get('data').toJS());
  data.content = data.body;
  const html = env.render(path, data);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const Home = ({ entry }) => (
  <Preview entry={entry} path="layouts/home.njk" context={(context) => context} />
);

const Post = ({ entry }) => (
  <Preview entry={entry} path="layouts/post.njk" context={(context) => context} />
);

CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('blog', Post);
