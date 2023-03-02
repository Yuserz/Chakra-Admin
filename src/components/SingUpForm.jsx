import "../Styles/login.less";

export default function LoginForm() {
  return (
    <div className="sign-up-box">
      <div className="intro-box">
        <p className="intro-box__intro-text">Welcome Back</p>
        <p className="intro-box__intro-message">
          Enter your email and password to sign in
        </p>
      </div>

      <div className="input-box">
        <div className="input-field">
          <label htmlFor="Password">Password</label>
          <input placeholder="Your password" name="Password" type="password" />
        </div>
      </div>

      <div className="input-box">
        <div className="input-field">
          <label htmlFor="Email">Email</label>
          <input placeholder="Your email address" name="Email" type="text" />
        </div>
      </div>

      <div className="remember-me">
        <label className="remember-me__switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p>Remember me</p>
      </div>

      <div>
        <button className="login-btn">SIGN IN</button>
      </div>

      <div className="create-account">
        Don't have an account?{" "}
        <a href="" className="sign-up">
          Sign up
        </a>
      </div>
    </div>
  );
}
