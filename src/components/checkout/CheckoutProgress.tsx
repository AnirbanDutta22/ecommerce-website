// components/checkout/CheckoutProgress.tsx
import { CheckCircleIcon } from "lucide-react";
import React from "react";

interface CheckoutProgressProps {
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

const steps = [
  { number: 1, label: "PERSONAL INFORMATION" },
  { number: 2, label: "ADDRESSES" },
  { number: 3, label: "SHIPPING METHOD" },
  { number: 4, label: "PAYMENT" },
];

export default function CheckoutProgress({
  currentStep,
  completedSteps,
  onStepClick,
}: CheckoutProgressProps) {
  return (
    <div className="relative mb-12 mt-6">
      <div className="flex justify-between items-center">
        {steps.map((step) => (
          <React.Fragment key={step.number}>
            <div
              className={`flex flex-col items-center relative z-10 cursor-pointer`}
              onClick={() => onStepClick(step.number)}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 
                ${
                  completedSteps.includes(step.number)
                    ? "bg-amber-700 border-amber-700 text-white"
                    : step.number === currentStep
                    ? "border-amber-700 text-amber-700"
                    : "border-gray-300 text-gray-300"
                }`}
              >
                {completedSteps.includes(step.number) ? (
                  <CheckCircleIcon className="w-6 h-6" />
                ) : (
                  <span>{step.number}</span>
                )}
              </div>
              <div
                className={`text-xs mt-2 text-center max-w-[80px] leading-tight
                ${
                  step.number === currentStep
                    ? "text-amber-700 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </div>
            </div>

            {step.number < steps.length && (
              <div
                className={`flex-1 h-0.5 
                ${
                  completedSteps.includes(step.number)
                    ? "bg-amber-700"
                    : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
