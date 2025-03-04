import { GetOrdersResponse, OrderInterface } from "./intefaces";



const API_URL = import.meta.env.VITE_SCRIPT_SHEETS_URL;
const GET_DATA_ACTION = import.meta.env.VITE_GET_DATA_ACTION;
const UPDATE_DELIVERY_ACTION = import.meta.env.VITE_UPDATE_DELIVERY_ACTION;
const UPDATE_READY_ACTION = import.meta.env.VITE_UPDATE_READY_ACTION;
const VALIDATE_ACTION = import.meta.env.VITE_VALIDATE_ACTION;

export const fetchOrderData = async (
  email: string
): Promise<OrderInterface[] | null> => {
  const url = `${API_URL}user=${email}&action=${GET_DATA_ACTION}`;
  try {
    const response = await fetch(url);
    
    if (response.ok) {
      const result: GetOrdersResponse = await response.json();

      if (result.status == 200) {
        return result.data;
      } else {
        return [];
      }
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
};


export const updateOrderStatus = async (
  id: string,
  status: string,
  email: string | null
): Promise<void> => {
  const url = `${API_URL}user=${email}&action=${UPDATE_READY_ACTION}&id=${id}&listo=${status}`;

  try {
    await fetch(url, {
      method: "POST",
    })
      .then((r) => r.json())
      .catch(console.error);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export const updateDeliveryDate = async (
  id: string,
  date: string | null,
  email: string | null
): Promise<void> => {
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (date !== null && !dateRegex.test(date)) {
    throw new Error("Invalid date format. Please use dd-mm-yyyy.");
  }
  date = date ?? "";
  const url = `${API_URL}user=${email}&action=${UPDATE_DELIVERY_ACTION}&id=${id}&date=${date}`;

  try {
    await fetch(url, {
      method: "POST",
    })
      .then((r) => r.json())
      .catch(console.error);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};


export const isValidUser = async (email: string): Promise<boolean> => {
  const url = `${API_URL}user=${email}&action=${VALIDATE_ACTION}`;

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
