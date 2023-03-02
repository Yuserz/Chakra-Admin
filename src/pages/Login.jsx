import LoginForm from "../components/LoginForm.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Styles/login.less";
import backgroundImage from "../assets/images/Image.png";

export default function Login() {
  return (
    <div className="login-container">
      <Header />
      <img className="login-background-image" src={backgroundImage} alt="" />
      <LoginForm />
      <Footer />
    </div>
  );
}
