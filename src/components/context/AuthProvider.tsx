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
  setAuthData: (email: string | null, name?: string | null, picture?: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");
    const storedPicture = localStorage.getItem("userPicture");

    if (storedEmail) setEmail(storedEmail);
    if (storedName) setName(storedName);
    if (storedPicture) setPicture(storedPicture);
  }, []);

  const handleSetAuthData = (
    email: string | null,
    name: string | null = null,
    picture: string | null = null
  ) => {
    if (email) {
      localStorage.setItem("userEmail", email);
      if (name) localStorage.setItem("userName", name);
      if (picture) localStorage.setItem("userPicture", picture);
    } else {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("userPicture");
    }
    setEmail(email);
    setName(name);
    setPicture(picture);
  };

  return (
    <AuthContext.Provider value={{ email, name, picture, setAuthData: handleSetAuthData }}>
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
