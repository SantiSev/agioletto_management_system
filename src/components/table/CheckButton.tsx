import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { updateOrderStatus } from "../../services/service";

interface CheckButtonProps {
  status: string;
  currentRow: string;
}

export const CheckButton: React.FC<CheckButtonProps> = ({
  status,
  currentRow,
}) => {
  const [currentState, setCurrentState] = useState<boolean>(status === "listo");
  const [isPending, setIsPending] = useState<boolean>(false); // Track API status

  const toggleStatus = async (currentRow: string) => {
    const newStatus = currentState ? "pendiente" : "listo";

    // Optimistically update the UI first
    setCurrentState((prevState) => !prevState);
    setIsPending(true); // Show loading state

    try {
      await updateOrderStatus(currentRow, newStatus);
    } catch (error) {
      console.error("Failed to update status:", error);
      setCurrentState((prevState) => !prevState); // Revert on failure
    } finally {
      setIsPending(false); // Reset loading state
    }
  };

  return (
    <button
      onClick={() => toggleStatus(currentRow)}
      className={`${
        currentState ? "text-orange-600" : "text-gray-600"
      } text-3xl rounded-md hover:scale-110 mt-2 transform transition-all ${
        isPending ? "opacity-50 cursor-wait" : ""
      }`}
      disabled={isPending}
    >
      <IoMdCheckmarkCircle />
    </button>
  );
};
