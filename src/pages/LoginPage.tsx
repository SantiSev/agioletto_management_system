import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import background_image from "../assets/login_background.jpg";
import { useAuth } from "../components/context/AuthProvider";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const { login } = useAuth(); // Use the login function from AuthProvider
  const navigate = useNavigate();

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      if (credentialResponse.credential) {
        const decodedToken: any = jwtDecode(credentialResponse.credential);

        // Use the login function from AuthProvider
        login(
          credentialResponse.credential, // token
          decodedToken.email, // email
          decodedToken.name, // name
          decodedToken.picture // picture
        );

        navigate("/");
      } else {
        throw new Error("No credential received");
      }
    } catch (error) {
      console.error("Login failed:", error);
      navigate("/error", { state: { error: (error as Error).message } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative gap-10">
      <img
        src={background_image}
        alt="Login background"
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
        onError={() => {
          console.error("Login failed, please try again");
          navigate("/error");
        }}
        text="continue_with"
      />

    </div>
  );
};

export default LoginPage;
