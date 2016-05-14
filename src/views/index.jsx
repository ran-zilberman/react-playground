var React = require('react');

var Index = React.createClass({

render: function() {

var bundleScript = this.props.bundleScript || "bundle.js";

return (
<html>
<head>
</head>
<body>
<div id="app"></div>
<script src={bundleScript} ></script>
</body>
</html>
);
}
});

module.exports = Index;
