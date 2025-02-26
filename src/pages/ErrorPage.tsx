import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate, useLocation } from "react-router-dom";
import background_image from "../assets/sillas_imagen.jpg";
import { useAuth } from "../components/context/AuthProvider";
import { jwtDecode } from "jwt-decode";

const ErrorPage = () => {
  const { login } = useAuth(); // Use the login function from AuthProvider
  const navigate = useNavigate();
  const location = useLocation();
  const errorMessage = location.state?.error || "An unknown error occurred";

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
    <>
      <div className="flex flex-col items-center justify-center min-h-screen relative gap-20">
        <img
          src={background_image}
          alt="Login background"
          className="absolute -z-10 top-0 left-0 w-full h-full object-cover blur-md brightness-50"
        />

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-8xl font-sans font-normal text-orange-500 drop-shadow-xl">
            agioletto
          </h1>
          <h2 className="text-3xl font-normal text-white font-sans drop-shadow-lg">
            Sistema de Gestion
          </h2>
          <p className="bg-orange-500 font-semibold text-white p-2 mx-5 md:px-4 px-0 rounded-full border border-white text-center md:text-base text-xs">
            En caso de haber error vuelva a probar iniciar session desde aquí
          </p>
          {errorMessage && (
            <p className="text-red-500 font-semibold  p-2 px-4 rounded-full bg-white border">
              {errorMessage}
            </p>
          )}
        </div>

        <GoogleLogin
          onSuccess={handleLogin}
          onError={() => {
            const error = "Login failed, please try again";
            console.error(error);
            navigate("/error", { state: { error } });
          }}
          text="continue_with"
        />
      </div>
    </>
  );
};

export default ErrorPage;
