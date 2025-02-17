// components/checkout/OrderSummary.tsx
import { useState } from "react";
import Image from "next/image";
import { CartItem } from "@/app/checkout/page";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

export default function OrderSummary({
  items,
  subtotal,
  shipping,
  taxes,
  total,
}: OrderSummaryProps) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{items.length} items</h2>
        <button
          className="flex items-center text-white bg-amber-700 px-4 py-2 rounded-md text-sm"
          onClick={() => setDetailsVisible(!detailsVisible)}
        >
          show details
          {detailsVisible ? (
            <ArrowUpIcon className="w-4 h-4 ml-2" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 ml-2" />
          )}
        </button>
      </div>

      {detailsVisible && (
        <div className="mb-6 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-start">
              <div className="w-16 h-16 relative mr-4 border border-gray-200 rounded">
                <Image
                  src={item.image || "/placeholder.jpg"}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                  className="p-1"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm">
                  {item.name} x{item.quantity}
                </h3>
                {item.size && (
                  <p className="text-xs text-gray-500">Size: {item.size}</p>
                )}
                <p className="text-amber-700 font-medium mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2 border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between font-medium">
          <span>Total (tax excl.)</span>
          <span>${(subtotal + shipping).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total (tax incl.)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes:</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <PolicyInfo
          icon={<ShieldIcon />}
          title="Security policy"
          text="(edit with the Customer Reassurance module)"
        />
        <PolicyInfo
          icon={<TruckIcon />}
          title="Delivery policy"
          text="(edit with the Customer Reassurance module)"
        />
        <PolicyInfo
          icon={<RefundIcon />}
          title="Return policy"
          text="(edit with the Customer Reassurance module)"
        />
      </div>
    </div>
  );
}

// Helper components
function PolicyInfo({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start">
      <div className="w-6 h-6 mr-2">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-600">{text}</p>
      </div>
    </div>
  );
}

// Icons
function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h10M8 11h8m0 4H8m9-11a3 3 0 00-3 3v12a2 2 0 002 2h4a2 2 0 002-2V6a3 3 0 00-3-3z"
      />
    </svg>
  );
}

function RefundIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
      />
    </svg>
  );
}
