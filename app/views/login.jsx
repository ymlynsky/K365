var React = require('react');
var DefaultLayout = require('./components/default');

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <form class="form-signin" action="/login" method="post">
          <h2 class="form-signin-heading text-center">Open, says me</h2>
        
          <label for="username" class="sr-only">Username</label>
          <input type="text" name="username" id="username" class="form-control" placeholder="Username" required autofocus />
          
          <label for="password" class="sr-only">Password</label>
          <input type="password" name="password" id="password" class="form-control" placeholder="Password" />
          
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
        <div class="row">
          <div class="center-block text-center">
          <a href="/oauth/facebook">Login with Facebook</a>
        </div>
    </div>
      </DefaultLayout>
    );
  }
}

module.exports = Login;