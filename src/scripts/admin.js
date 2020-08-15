import markdownFilter from '../filters/markdown-filter';

const env = nunjucks.configure();

env.addFilter('markdown', markdownFilter);

const Preview = ({ entry, path, context }) => {
  const data = context({ home: entry.get('data').toJS() });
  const html = env.render(path, data);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const Home = ({ entry }) => (
  <Preview entry={entry} path="index.njk" context={(context) => context} />
);

CMS.registerPreviewTemplate('home', Home);
