import LoginForm from "../components/LoginForm.jsx"
import Header from "../components/Header.jsx"
import "../Styles/login.less";

export default function Login() {
  return (
    <div className="login-container">
      {/* <Header></Header> */}
      <LoginForm />
    </div>
  );
}
