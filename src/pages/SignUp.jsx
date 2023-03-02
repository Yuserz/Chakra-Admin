import SignUpForm from "../components/SingUpForm.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../Styles/sign-up.less";
import backgroundImage from "../assets/images/Image.png";

export default function SignUp() {
  return (
    <div className="sing-up-container">
      <SignUpForm />
    </div>
  );
}
