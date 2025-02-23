
interface GetOrdersResponse {
  status: number;
  data: OrderInterface[];
}

interface OrderInterface {
    id: string;
    etiquetas: string;
    operador: string;
    email: string;
    p_sem: string;
    num_pedido: string;
    producto: string;
    medidas: string;
    modelo: string;
    color: string;
    cant: string;
    f_entrega: string;
    listo: string;
  }

export type { OrderInterface, GetOrdersResponse };