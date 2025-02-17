// components/checkout/AddressForm.tsx
import React from "react";
import { AddressData } from "@/app/checkout/page";

interface AddressFormProps {
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
  onContinue: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  addressData,
  setAddressData,
  onContinue,
}) => {
  const handleChange = (field: keyof AddressData, value: string | boolean) => {
    setAddressData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Address</h2>
      <p className="text-sm text-gray-600">
        The selected address will be used both as your personal address (for
        invoice) and as your delivery address.
      </p>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={addressData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={addressData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
      </div>

      {/* Company (Optional) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Company (Optional)
        </label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={addressData.company || ""}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Address
        </label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={addressData.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
      </div>

      {/* Address Complement (Optional) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Address Complement (Optional)
        </label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={addressData.addressComplement || ""}
          onChange={(e) => handleChange("addressComplement", e.target.value)}
        />
      </div>

      {/* City & State */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={addressData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            State
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={addressData.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />
        </div>
      </div>

      {/* ZIP & Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            ZIP/Postal Code
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={addressData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Country
          </label>
          <select
            className="w-full border rounded p-2"
            value={addressData.country}
            onChange={(e) => handleChange("country", e.target.value)}
          >
            {/* You can add more countries or fetch dynamically */}
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>
      </div>

      {/* Phone (Optional) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Phone (Optional)
        </label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={addressData.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>

      {/* Use for Invoice */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={addressData.useForInvoice}
          onChange={(e) => handleChange("useForInvoice", e.target.checked)}
        />
        <label className="text-sm text-gray-700">
          Use this address for invoice
        </label>
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

export default AddressForm;
