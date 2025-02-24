import { GetOrdersResponse, OrderInterface } from "./intefaces";



const API_URL = import.meta.env.VITE_SCRIPT_SHEETS_URL;


export const fetchOrderData = async (
  email: string
): Promise<OrderInterface[] | null> => {
  const url = `${API_URL}action=fetchData&email=${email}`;
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
  status: string
): Promise<void> => {
  const url = `${API_URL}action=updateReadyStatus&id=${id}&listo=${status}`;

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
  date: string | null
): Promise<void> => {
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
  if (date !== null && !dateRegex.test(date)) {
    throw new Error("Invalid date format. Please use dd-mm-yyyy.");
  }
  date = date ?? "";
  const url = `${API_URL}action=updateDeliveryDate&id=${id}&date=${date}`;

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
