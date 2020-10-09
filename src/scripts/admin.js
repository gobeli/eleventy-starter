
import { Liquid } from 'liquidjs';
import React, { useState } from 'react'

import markdownFilter from '../filters/markdown-filter';

const engine = new Liquid({ root: '/src/_includes', cache: true });

engine.registerFilter('markdown', markdownFilter);

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      template: null,
      html: ''
    };
  }

  renderFile() {
    if (!this.state.template) {
      console.warn('Template not yet parsed');
      return;
    }
    const data = this.props.context(this.props.entry.get('data').toJS());
    data.content = data.body;
    engine.render(this.state.template, data)
      .then(html => this.setState({ html }))
  }

  componentDidMount() {
    engine.parseFile(this.props.path)
      .then(template => {
        this.setState({ template });
        this.renderFile();
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.entry !== prevProps.entry) {
      this.renderFile();
    }
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.html }} />;
  }
}

const Home = ({ entry }) => (
  <Preview entry={entry} path="layouts/home.html" context={(context) => context} />
);

const Post = ({ entry }) => (
  <Preview entry={entry} path="layouts/post.html" context={(context) => context} />
);

CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('blog', Post);
