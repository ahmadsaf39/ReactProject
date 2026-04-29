import './login.scss';

function Login() {
  return (
    <div className="login-container">
      <form action="/submit-login" method="POST">
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        <div className="form-footer">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;