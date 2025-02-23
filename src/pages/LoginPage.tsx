import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import background_image from "../assets/login_background.jpg";
import { useAuth } from "../components/context/AuthProvider";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const { setAuthData } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decodedToken: any = jwtDecode(credentialResponse.credential);
      setAuthData(decodedToken.email, decodedToken.name, decodedToken.picture);
      localStorage.setItem("authToken", credentialResponse.credential);
      navigate("/employees");
    } else {
      navigate("/error");
    }
  };

  const handleSignIn = () => {
    // Handle the sign-in logic here
    console.log("Sign In button clicked");
    // You can navigate to a sign-up page or show a sign-up form
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative gap-10">
      <img
        src={background_image}
        alt=""
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover blur-md"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-7xl font-sans font-normal text-orange-500 drop-shadow-xl">
          agioletto
        </h1>
        <h2 className="text-2xl font-normal text-white font-sans drop-shadow-lg">
          Sistema de Gestion
        </h2>
      </div>

      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => console.error("Login failed, please try again")}
        text="continue_with" // This changes the button text to "Continue with Google"
      />

      <button
        onClick={handleSignIn}
        className="mt-4 px-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
      >
        No estas registrados? Cliquee aqui!
      </button>
    </div>
  );
};

export default LoginPage;
