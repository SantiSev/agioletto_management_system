// components/Filter.tsx
import { useState } from "react";
import DatePicker from "react-datepicker";
import { TbFilter } from "react-icons/tb";
import "react-datepicker/dist/react-datepicker.css";

interface FilterProps {
    value: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
}

const Filter = ({ value, onChange, placeholder = "Filter by week period" }: FilterProps) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <div className="flex justify-end h-11 w-full text-xs md:text-sm">
            <TbFilter
            className="inline-block mr-1 text-orange-600 text-4xl cursor-pointer mt-2"
            onClick={() => setShowDatePicker((prev) => !prev)}
            />
            {showDatePicker && (
                <div className="shadow-lg">
                    <DatePicker
                        selected={value}
                        onChange={(date) => {
                            onChange(date);
                        }}
                        dateFormat="dd-MM-yyyy"
                        placeholderText={placeholder}
                        isClearable
                        className="py-3 px-2 md:px-0 border border-orange-500 rounded w-44 md:w-56 text-center"
                        showWeekNumbers
                        showWeekPicker
                    />
                </div>
            )}
        </div>
    );
};

export default Filter;
