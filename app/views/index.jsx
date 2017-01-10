var React = require('react');
var DefaultLayout = require('./components/default');

class Hello extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
      	{
  		this.props.user
  		?
  			<div>Hello {this.props.user}
  				<a href="/logout">Logout</a>
  			</div>
  			
  		:
  			<div>
      			<a href="/register">Register</a>
				<a href="/login">Login</a>
			</div>
      	}
      </DefaultLayout>
    );
  }
}

module.exports = Hello;