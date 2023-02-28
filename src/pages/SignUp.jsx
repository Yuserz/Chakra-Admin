import "../Styles/login.less";

export default function Login() {
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <div className="login-form">
        <p>Enter your email and password to sign in</p>
        <div className="social-account-option">
          <div className="social-link">
            <img src="" alt="FB" />
          </div>
          <div className="social-link">
            <img src="" alt="Apple" />
          </div>
          <div className="social-link">
            <img src="" alt="Google" />
          </div>
        </div>
      </div>
      <p>or</p>
      <div className="input-box">
        <div className="input-field">
          <label htmlFor="Email"></label>
          <input placeholder="Your email address" name="Email" type="text" />
        </div>
        <div className="input-field">
          <label htmlFor="Password"></label>
          <input placeholder="Your password" name="Password" type="password" />
        </div>
      </div>
      <div className="remember-me-box">
        <button className="remember-me-btn"></button>
        <button className="login-btn">SING UP</button>

        <div className="create-account">
          Don't have an account? <button className="sing-up"> Sing up</button>
        </div>
      </div>
    </div>
  );
}
