const htm = require('htm');

const Index = require('../content/index.11ty');

const html = htm.bind(h);

var HomePreview = createClass({
  render: function () {
    const index = new Index();
    return html([index.render({ home: this.props.entry.get('data').toJS() })]);
  },
});

CMS.registerPreviewTemplate('home', HomePreview);
