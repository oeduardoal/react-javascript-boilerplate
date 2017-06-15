var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

// Components
var UserRepos = require('./UserRepos');

var UserInfo = createReactClass({
	render: function(){
		var data = this.props.user ?
			(
				<div>
					<img src={this.props.user.avatar_url} width="140" height="140" />
					<h2>{this.props.user.login}</h2>
					<p>{this.props.user.name}</p>
					<p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
					<p><a href={this.props.user.html_url}>View details</a></p>
					<UserRepos repos={this.props.repos}/>
				</div>
			) : null;
			return data;
		}
})

// Definindo tipos de variáveis
UserInfo.protoTypes = {
	user: PropTypes.object,
	repos: PropTypes.array
};
module.exports = UserInfo;