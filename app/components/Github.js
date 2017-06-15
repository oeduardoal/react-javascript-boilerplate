var React = require('react');
var createReactClass = require('create-react-class');

// Importando Components
var Search = require('./Search');
var UserInfo = require('./UserInfo');

var Github = createReactClass({
	getInitialState: function() {
		return{
			user: null,
			repos: []
		}	
	},
	updateUser: function(user) {
		// Assim que seta um valor com react
		this.setState({user: user})
	},
	updateRepos: function(repos) {
		// Assim que seta um valor com react
		this.setState({repos: repos})
	},
	// Passando funções para outros componentes
	render: function() {
		return (
			<section>
				<Search
				updateUser={this.updateUser}
				updateRepos={this.updateRepos}
				/>
				<UserInfo
				user={this.state.user}
				repos={this.state.repos}
				/>
				
			</section>
		)	
	}
});

module.exports = Github;