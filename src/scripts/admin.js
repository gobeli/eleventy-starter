const htm = require('htm');

const Index = require('../content/index.11ty');

const html = htm.bind(h);

var HomePreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'photo']);
    var photo = this.props.getAsset(image);
    var title = entry.getIn(['data', 'title']);
    var intro = entry.getIn(['data', 'intro']);
    const index = new Index();
    return html([index.render({ home: { photo, title, intro } })]);
  },
});

CMS.registerPreviewTemplate('home', HomePreview);
