import { useEffect, useState } from "react";
import { fetchOrderData } from "../services/service";
import { useAuth } from "../components/context/AuthProvider";
import Table from "../components/table/Table";
import { OrderInterface } from "../services/intefaces";
import Filter from "../components/table/Filter";

const OrdersPage = () => {
  const { email } = useAuth();
  const [data, setData] = useState<OrderInterface[] | null>(null);
  const [filterDate, setFilterDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchAndLogData = async () => {
      if (email) {
        const data = await fetchOrderData(email);
        setData(data);
      } else {
        console.error("No email available. User might not be logged in.");
      }
    };

    fetchAndLogData();
  }, [email]);

  return (
    <div className="mx-2 md:mx-20">
      <div className="flex justify-between items-center font-sans w-full h-fit my-4">
        <div className="w-full">
          <div className="flex justify-between items-center">
          <h1 className="text-orange-600 text-2xl md:text-3xl font-semibold flex items-center h-full">pedidos</h1>
            <Filter
              value={filterDate}
              onChange={setFilterDate}
              placeholder="Filtrar por periodo de semana"
            />
          </div>
          <div className="border-t border-orange-500 w-full mt-3"></div>
        </div>
      </div>

      {data ? (
        <Table
          orderData={data}
          filterDate={filterDate}
          setFilterDate={setFilterDate}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default OrdersPage;
