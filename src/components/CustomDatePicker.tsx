import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateDeliveryDate } from "../services/service";
import { es } from "date-fns/locale/es"; // Correctly import the Spanish locale
import { useAuth } from "./context/AuthProvider";

registerLocale("es", es);

interface DatePickerProps {
  selectedDate: string;
  currentRow: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  currentRow,
}) => {
  const { email } = useAuth();
  const [date, setDate] = useState<Date | null>(
    selectedDate ? new Date(selectedDate) : null
  );

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
    // Convert Date back to string and update the row data
    const newDateString = newDate
      ? `${newDate.getDate().toString().padStart(2, "0")}-${(
          newDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${newDate.getFullYear()}`
      : null; // Format as "DD-MM-YYYY"

    updateDeliveryDate(currentRow, newDateString, email);
  };

  return (
    <div className="relative px-2 md:px-0">
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        className="w-fit px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        dateFormat="dd/MM/yyyy"
        placeholderText="Seleccione una fecha"
        isClearable
        locale="es"
        onKeyDown={(e) => e.preventDefault()}
        clearButtonClassName="bg-orange-600 text-white px-2 py-1 rounded-lg"
      />
    </div>
  );
};

export default CustomDatePicker;
