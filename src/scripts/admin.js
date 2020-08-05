const Intro = require('../_includes/components/Intro');
const Header = require('../_includes/components/Header');

var HomePreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var image = entry.getIn(['data', 'photo']);
    var bg = this.props.getAsset(image);
    var title = entry.getIn(['data', 'title']);
    return h(
      'div',
      {},
      h('div', { dangerouslySetInnerHTML: { __html: Header({ title, photo: bg.toString() }) } }),
      h('div', {
        dangerouslySetInnerHTML: { __html: Intro({ intro: entry.getIn(['data', 'intro']) }) },
      })
    );
  },
});

CMS.registerPreviewTemplate('home', HomePreview);
