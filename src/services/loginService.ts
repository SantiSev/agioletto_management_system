const API_URL = import.meta.env.VITE_SCRIPT_SHEETS_URL;
const VALIDATE_ACTION = import.meta.env.VITE_VALIDATE_ACTION;

export const isValidUser = async (email: string): Promise<boolean> => {
  const url = `${API_URL}action=${VALIDATE_ACTION}&email=${email}`;

  if (!email) {
    throw new Error("Invalid email");
  }

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      const result = await response.json();
      return result.isValid;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return false;
  }
};
