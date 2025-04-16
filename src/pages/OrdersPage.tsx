import { useEffect, useState } from "react";
import { fetchOrderData } from "../services/service";
import { useAuth } from "../components/context/AuthProvider";
import Table from "../components/table/Table";
import { OrderInterface } from "../services/intefaces";
import Filter from "../components/table/Filter";
import Loader from "../components/Loader";
import SetOrder from "../components/table/SetOrder";

const OrdersPage = () => {
  const { email } = useAuth();
  const [data, setData] = useState<OrderInterface[] | null>(null);
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [isAscending, setIsAscending] = useState(true);
  const toggleOrder = () => setIsAscending((prev) => !prev);
  const sortedData = data ? (isAscending ? data : [...data].reverse()) : [];

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
            <h1 className="text-orange-600 text-2xl md:text-3xl font-semibold flex items-center h-full">
              pedidos
            </h1>
            <Filter
              value={filterDate}
              onChange={setFilterDate}
              placeholder="Filtrar por periodo de semana"
            />
            <SetOrder isAscending={isAscending} toggleOrder={toggleOrder} />
          </div>
          <div className="border-t border-orange-500 w-full mt-3"></div>
        </div>
      </div>

      {data ? (
        data.length > 0 ? (
          <Table
            orderData={sortedData}
            filterDate={filterDate}
            setFilterDate={setFilterDate}
          />
        ) : (
          <div className="flex justify-center items-center h-full overflow-hidden">
            <h1 className="font-bold text-sm lg:text-2xl text-orange-500 text-center mt-5 border border-orange-500 p-3 rounded-full  lg:px-7 ">
              Usted no fue asignado a ningun pedido, <br /> vuelva mas tarde!
            </h1>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center h-full overflow-hidden">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
