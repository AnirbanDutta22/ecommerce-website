// components/checkout/PaymentMethod.tsx
import React from "react";
import { PaymentData } from "@/app/checkout/page";

interface PaymentMethodProps {
  paymentData: PaymentData;
  setPaymentData: React.Dispatch<React.SetStateAction<PaymentData>>;
  onContinue: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentData,
  setPaymentData,
  onContinue,
}) => {
  const handleMethodChange = (method: string) => {
    setPaymentData((prev) => ({
      ...prev,
      method,
    }));
  };

  const handleAgreeToTerms = (checked: boolean) => {
    setPaymentData((prev) => ({
      ...prev,
      agreeToTerms: checked,
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Payment Method</h2>

      {/* Pay by Check */}
      <div className="border p-4 rounded">
        <label className="flex items-start space-x-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="check"
            checked={paymentData.method === "check"}
            onChange={() => handleMethodChange("check")}
          />
          <div>
            <span className="font-semibold">Pay by Check</span>
            <p className="text-sm text-gray-600">
              Please send your check within 7 days or we will cancel your order.
              We won't ship your order until we receive your payment.
            </p>
          </div>
        </label>
      </div>

      {/* Pay by Bank Wire */}
      <div className="border p-4 rounded">
        <label className="flex items-start space-x-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="bank_wire"
            checked={paymentData.method === "bank_wire"}
            onChange={() => handleMethodChange("bank_wire")}
          />
          <div>
            <span className="font-semibold">Pay by Bank Wire</span>
            <p className="text-sm text-gray-600">
              We will send you an order confirmation by email containing bank
              details for your wire transfer. Please send it within 7 days or we
              will cancel your order. We won't ship your order until we receive
              your payment.
            </p>
          </div>
        </label>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          checked={paymentData.agreeToTerms}
          onChange={(e) => handleAgreeToTerms(e.target.checked)}
        />
        <label className="text-sm text-gray-700">
          I agree to the terms of service and will adhere to them
          unconditionally.
        </label>
      </div>

      {/* Final Button */}
      <button
        type="button"
        onClick={onContinue}
        className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800"
      >
        ORDER WITH AN OBLIGATION TO PAY
      </button>
    </div>
  );
};

export default PaymentMethod;
