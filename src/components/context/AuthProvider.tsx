import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type AuthContextType = {
  email: string | null;
  name: string | null;
  picture: string | null;
  isAuthenticated: boolean;
  login: (token: string, email: string, name?: string, picture?: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    const storedPicture = localStorage.getItem("userPicture");

    if (storedToken) {
      setToken(storedToken);
      setEmail(storedEmail);
      setName(storedName);
      setPicture(storedPicture);
    }
  }, []);

  const login = (
    authToken: string,
    userEmail: string,
    userName?: string,
    userPicture?: string
  ) => {
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("userEmail", userEmail);
    if (userName) localStorage.setItem("userName", userName);
    if (userPicture) localStorage.setItem("userPicture", userPicture);
    
    setToken(authToken);
    setEmail(userEmail);
    setName(userName || null);
    setPicture(userPicture || null);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userPicture");
    
    setToken(null);
    setEmail(null);
    setName(null);
    setPicture(null);
  };

  const contextValue = {
    email,
    name,
    picture,
    isAuthenticated: !!token,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};