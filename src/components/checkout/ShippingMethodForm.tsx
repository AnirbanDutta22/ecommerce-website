// components/checkout/ShippingMethod.tsx
import React from "react";
import { ShippingData } from "@/app/checkout/page";

interface ShippingMethodProps {
  shippingData: ShippingData;
  setShippingData: React.Dispatch<React.SetStateAction<ShippingData>>;
  onContinue: () => void;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({
  shippingData,
  setShippingData,
  onContinue,
}) => {
  const handleMethodChange = (
    method: string,
    carrier: string,
    cost: number
  ) => {
    setShippingData((prev) => ({
      ...prev,
      method,
      carrier,
      cost,
    }));
  };

  const handleCommentChange = (comment: string) => {
    setShippingData((prev) => ({
      ...prev,
      comment,
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Shipping Method</h2>

      {/* Example shipping option (you can add more if needed) */}
      <div className="border p-4 rounded flex items-start space-x-2">
        <input
          type="radio"
          name="shippingMethod"
          value="standard"
          checked={shippingData.method === "standard"}
          onChange={() => handleMethodChange("standard", "My carrier", 7.0)}
        />
        <div>
          <div className="font-semibold">
            {shippingData.carrier} (Delivery next day!)
          </div>
          <div className="text-sm text-gray-600">
            ${shippingData.cost.toFixed(2)} tax excl.
          </div>
        </div>
      </div>

      {/* Add a comment for shipping */}
      <div>
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          Order Comment
        </label>
        <textarea
          className="w-full border rounded p-2"
          rows={4}
          value={shippingData.comment}
          onChange={(e) => handleCommentChange(e.target.value)}
          placeholder="If you would like to add a comment about your order, please write it in the field below."
        />
      </div>

      {/* Continue Button */}
      <button
        type="button"
        onClick={onContinue}
        className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800"
      >
        Continue
      </button>
    </div>
  );
};

export default ShippingMethod;
