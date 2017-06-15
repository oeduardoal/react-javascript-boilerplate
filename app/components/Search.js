var React = require('react');

var createReactClass = require('create-react-class');

// Require Service 
var GithubUser = require("../services/GithubUser");

var Search = createReactClass({
	SubmitForm: function(e){

		e.preventDefault();

		GithubUser.getByUsername(this.refs.username.value).then(function(res){
			// Acessando Funções do componente Pai
			this.props.updateUser(res.data);
		}.bind(this));

		GithubUser.getReposByUsername(this.refs.username.value).then(function(res){
			// Acessando Funções do componente Pai
			this.props.updateRepos(res.data);
		}.bind(this));	
	},
	render: function() {
		return (
			<form onSubmit={this.SubmitForm}>
				<label>Username: </label>
				<input type="text" ref="username"/>
			</form>
		)	
	}
});

module.exports = Search;