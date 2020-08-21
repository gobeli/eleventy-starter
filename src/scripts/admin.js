import markdownFilter from '../filters/markdown-filter';

const env = nunjucks.configure();

env.addFilter('markdown', markdownFilter);

const removeFrontMatter = (html) => {
  const template = html.split('---');
  return template.length > 2 ? template[2] : template[0];
};

const Preview = ({ entry, path, context }) => {
  const data = context({ home: entry.get('data').toJS() });
  const html = env.render(path, data);

  return <div dangerouslySetInnerHTML={{ __html: removeFrontMatter(html) }} />;
};

const Home = ({ entry }) => (
  <Preview entry={entry} path="index.njk" context={(context) => context} />
);

CMS.registerPreviewTemplate('home', Home);
