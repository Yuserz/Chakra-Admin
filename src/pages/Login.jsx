import "../Styles/login.less";

export default function Login() {
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <div className="login-form">
        <p>Enter your email and password to sign in</p>
      </div>
      <div className="input-box">
        <div className="input-field">
          <label htmlFor="Email">Email</label>
          <input placeholder="Your email address" name="Email" type="text" />
        </div>
        <div className="input-field">
          <label htmlFor="Password">Password</label>
          <input placeholder="Your password" name="Password" type="password" />
        </div>
      </div>
      <div className="remember-me-box">
        <button className="remember-me-btn"></button>
        <p>Remember me</p>
      </div>

      <button className="login-btn">SIGN IN</button>

      <div className="create-account">
        Don't have an account? <button className="sign-up"> Sing up</button>
      </div>
    </div>
  );
}
