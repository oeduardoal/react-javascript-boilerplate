var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');


var UserRepos = createReactClass({
	render: function(){
		var data = this.props.repos.map(function(a,i) {
			return (
				<div key={i}>
					<h3>{a.name}</h3>
				</div>
			);
		})
		return (
			<div>
			<hr/>
				{data}
			</div>
		);
	}

});

module.exports = UserRepos;