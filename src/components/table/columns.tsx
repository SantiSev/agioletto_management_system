import CustomDatePicker from "../CustomDatePicker";
import { CheckButton } from "./CheckButton";

export const orderColumns = [
  {
    header: "Etiquetas",
    accessorKey: "etiquetas",
  },
  {
    header: "Periodo Semanal",
    accessorKey: "p_sem",
    size: 270, // set column size for this column
    cell: ({ getValue }: { getValue: () => string }) => {
      try {
        const rawDate = getValue();
        if (!rawDate) return "-";
        const [year, month, day] = rawDate.split("T")[0].split("-");
        return `${day}-${month}-${year}`;
      } catch (error) {
        return "Fecha Invalido, debe ser formato dd/mm/yyyy";
      }
    },
  },
  {
    header: "Número Pedido",
    accessorKey: "num_pedido",
  },
  {
    header: "Producto",
    accessorKey: "producto",
    meta: {
      className: "whitespace-normal break-words" // Allow wrapping
    }
  },
  {
    header: "Medidas",
    accessorKey: "medidas",
  },
  {
    header: "Modelo",
    accessorKey: "modelo",
  },
  {
    header: "Color",
    accessorKey: "color",
  },
  {
    header: "Cantidad",
    accessorKey: "cant",
  },
  {
    header: "Fecha de Entrega",
    accessorKey: "f_entrega",
    cell: ({
      row: {
        original: { f_entrega, id },
      },
    }: {
      row: { original: { f_entrega: string; id: string } };
    }) => <CustomDatePicker selectedDate={f_entrega} currentRow={id} />,
  },
  {
    header: "Listo",
    accessorKey: "listo",
    cell: ({
      row: {
        original: { listo, id },
      },
    }: {
      row: { original: { listo: string; id: string } };
    }) => <CheckButton status={listo} currentRow={id} />,
  },
];
