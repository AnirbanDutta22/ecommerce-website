// pages/checkout.tsx
"use client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import PersonalInformation from "@/components/checkout/PersonalInfoForm";
import AddressForm from "@/components/checkout/AddressForm";
import ShippingMethod from "@/components/checkout/ShippingMethodForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutProgress from "@/components/checkout/CheckoutProgress";

// Define types
export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  size?: string;
}

export interface UserData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  birthdate?: string;
  receiveOffers: boolean;
  agreeToPrivacy: boolean;
}

export interface AddressData {
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  addressComplement?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
  useForInvoice: boolean;
}

export interface ShippingData {
  method: string;
  carrier: string;
  cost: number;
  comment?: string;
}

export interface PaymentData {
  method: string;
  agreeToTerms: boolean;
}

export default function Checkout() {
  const router = useRouter();

  // State for steps
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // State for data
  const [userData, setUserData] = useState<UserData>({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    receiveOffers: false,
    agreeToPrivacy: false,
  });

  const [addressData, setAddressData] = useState<AddressData>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    useForInvoice: true,
  });

  const [shippingData, setShippingData] = useState<ShippingData>({
    method: "standard",
    carrier: "My carrier",
    cost: 7.0,
    comment: "",
  });

  const [paymentData, setPaymentData] = useState<PaymentData>({
    method: "bank_wire",
    agreeToTerms: false,
  });

  // Mock cart items
  const [cartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "White Barn Bath & Body Works 3 Wick",
      price: 11.9,
      quantity: 2,
      image: "/images/candle-wick.jpg",
    },
    {
      id: 2,
      name: "Hummingbird printed sweater",
      price: 28.72,
      originalPrice: 35.9,
      quantity: 2,
      image: "/images/sweater.jpg",
      size: "S",
    },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = shippingData.cost;
  const taxes = 0;
  const total = subtotal + shipping + taxes;

  // Validation handlers
  const validatePersonalInfo = (data: UserData): boolean => {
    return !!(data.firstName && data.lastName && data.email);
  };

  const validateAddress = (data: AddressData): boolean => {
    return !!(
      data.firstName &&
      data.lastName &&
      data.address &&
      data.city &&
      data.state &&
      data.zipCode &&
      data.country
    );
  };

  const validateShipping = (data: ShippingData): boolean => {
    return !!data.method;
  };

  const validatePayment = (data: PaymentData): boolean => {
    return !!(data.method && data.agreeToTerms);
  };

  // Navigation handlers
  const goToStep = (step: number) => {
    if (step <= Math.max(...completedSteps, 1)) {
      setCurrentStep(step);
    }
  };

  const handleNext = () => {
    let canProceed = false;
    let newCompletedSteps = [...completedSteps];

    switch (currentStep) {
      case 1:
        canProceed = validatePersonalInfo(userData);
        break;
      case 2:
        canProceed = validateAddress(addressData);
        break;
      case 3:
        canProceed = validateShipping(shippingData);
        break;
      case 4:
        canProceed = validatePayment(paymentData);
        if (canProceed) {
          handleSubmitOrder();
          return;
        }
        break;
    }

    if (canProceed) {
      if (!completedSteps.includes(currentStep)) {
        newCompletedSteps.push(currentStep);
        setCompletedSteps(newCompletedSteps);
      }
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmitOrder = () => {
    // In a real app, you would submit the order to your backend here
    console.log("Order submitted", {
      userData,
      addressData,
      shippingData,
      paymentData,
      items: cartItems,
      total,
    });

    // Redirect to order confirmation
    router.push("/order-confirmation");
  };

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInformation
            userData={userData}
            setUserData={setUserData}
            onContinue={handleNext}
          />
        );
      case 2:
        return (
          <AddressForm
            addressData={addressData}
            setAddressData={setAddressData}
            onContinue={handleNext}
          />
        );
      case 3:
        return (
          <ShippingMethod
            shippingData={shippingData}
            setShippingData={setShippingData}
            onContinue={handleNext}
          />
        );
      case 4:
        return (
          <PaymentMethod
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            onContinue={handleNext}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Checkout | OLARS Candle Shop</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Checkout Progress Steps */}
        <CheckoutProgress
          currentStep={currentStep}
          completedSteps={completedSteps}
          onStepClick={goToStep}
        />

        <div className="lg:flex lg:gap-8 mt-8">
          {/* Main Form Area */}
          <div className="lg:w-2/3 mb-8">
            <div className="bg-white border border-gray-200 rounded p-6">
              {renderStepContent()}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <OrderSummary
              items={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              taxes={taxes}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
