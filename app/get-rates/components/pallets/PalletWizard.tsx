"use client"

import type React from "react"

import { useState } from "react"
import { Check, MoveLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// You'll need to import your existing interfaces and default values
import { defaultPalletForm, defaultPalletFormError, heights } from "@/lib/defaultValues/forms";
import { palletFormError, palletFormValue } from "@/lib/interfaces/forms";
import { validatePalletFirstStep, validatePalletSecondStep } from "@/lib/utilities/validationHelper";
import { PalletInfo } from "./PalletSize"
import { AdditionalInfo } from "./AdditionalInfo"
import { PalletRates } from "./PalletRates"



const steps = [
  { title: "Pallet Info", component: PalletInfo },
  { title: "Additional Info", component: AdditionalInfo },
  { title: "Cost", component: PalletRates },
]

interface PalletWizardProps {
  onBack: () => void
}

export const PalletWizard: React.FC<PalletWizardProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<palletFormValue>(defaultPalletForm)
  const [formDataError, setFormDataError] = useState<palletFormError>(defaultPalletFormError)

  const handleNext = () => {
    setFormDataError(defaultPalletFormError);
    if (currentStep === 0) {
      const validate = validatePalletFirstStep(formData);
      const err = validate.error;
      setFormDataError((prev) => {
        return { ...prev, ...err };
      });
      if (!validate.isError) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
    if (currentStep === 1) {
      const validate = validatePalletSecondStep(formData);
      const err = validate.error;
      setFormDataError((prev) => {
        return { ...prev, ...err };
      });
      if (!validate.isError) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    
    setFormData((prev) => {
      if (name === "palletOpening") {
        return {
          ...prev,
          [name]: Number(value),
          height: Number(Math.max(0, Number(value) + heights[prev.capacity])),
        };
      }
      if (name !== "height") {
        return { ...prev, [name]: value };
      }
      return {
        ...prev,
        [name]: Number(value),
        palletOpening: Number(
          Math.max(0, Number(value) - heights[prev.capacity]).toFixed(1)
        ),
      };
    });
  };

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className="max-w-4xl w-full mx-auto sm:px-6 px-3">
      {/* Header */}
      <div className="relative mb-8">
        <button
          onClick={onBack}
          className="hover:bg-gray-700 my-3 transition-all duration-300 rounded-md hover:scale-110 p-2 absolute text-blue-400"
        >
          <MoveLeft size={35} />
        </button>
        <p className="text-center text-xl sm:text-3xl my-3 mb-6 font-bold text-white">Wooden Pallet Estimate</p>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-sm font-medium ${index <= currentStep ? "text-blue-400" : "text-gray-500"}`}
            >
              <Check
                strokeWidth={4}
                className={`p-1 rounded-full text-white ${index <= currentStep ? "bg-blue-600" : "bg-gray-500"}`}
              />
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Current Step Component */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <CurrentStepComponent formData={formData} handleInputChange={handleInputChange} errorData={formDataError} />
      </div>

      {/* Navigation buttons */}
      <div className="mt-8 flex">
        <Button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={`px-4 py-2 mr-auto bg-gray-600 text-white rounded-md disabled:opacity-50 hover:bg-gray-500 ${
            currentStep === 0 ? "hidden" : ""
          }`}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 bg-blue-600 ml-auto text-white rounded-md disabled:opacity-50 hover:bg-blue-700 ${
            currentStep === steps.length - 1 ? "hidden" : ""
          }`}
        >
          {currentStep === steps.length - 2 ? "Get Rates" : "Next"}
        </Button>
      </div>
    </div>
  )
}
