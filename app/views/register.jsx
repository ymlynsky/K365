var React = require('react');
var DefaultLayout = require('./components/default');

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <form class="form-signin" action="/register" method="post">
          <h2 class="form-signin-heading text-center">Register</h2>
        
          <label for="username" class="sr-only">Username</label>
          <input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus />

          <label for="name" class="sr-only">Name</label>
          <input type="text" id="name" name="name" class="form-control" placeholder="Name" required autofocus />

          <label for="email" class="sr-only">E-mail</label>
          <input type="email" id="email" name="email" class="form-control" placeholder="E-mail" required />
          
          <label for="password" class="sr-only">Password</label>
          <input type="password" name="password" id="password" class="form-control" placeholder="Password" required />
          
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
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