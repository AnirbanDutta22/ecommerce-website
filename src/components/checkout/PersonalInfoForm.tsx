// components/checkout/PersonalInformation.tsx
"use client";
import { useState } from "react";
import { UserData } from "@/app/checkout/page";

interface PersonalInfoProps {
  userData: UserData;
  setUserData: (data: UserData) => void;
  onContinue: () => void;
}

export default function PersonalInformation({
  userData,
  setUserData,
  onContinue,
}: PersonalInfoProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isGuest, setIsGuest] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!userData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!userData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!userData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!isGuest && !userData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onContinue();
    }
  };

  return (
    <div>
      <div className="flex items-center gap-8 mb-6">
        <button
          className={`text-amber-700 border-b-2 pb-2 ${
            isGuest ? "border-amber-700 font-medium" : "border-transparent"
          }`}
          onClick={() => setIsGuest(true)}
        >
          Order as a guest
        </button>
        <button
          className={`text-amber-700 border-b-2 pb-2 ${
            !isGuest ? "border-amber-700 font-medium" : "border-transparent"
          }`}
          onClick={() => setIsGuest(false)}
        >
          Sign in
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Social title</label>
          <div className="flex gap-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="title"
                value="Mr."
                checked={userData.title === "Mr."}
                onChange={handleChange}
                className="form-radio text-amber-700"
              />
              <span className="ml-2">Mr.</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="title"
                value="Mrs."
                checked={userData.title === "Mrs."}
                onChange={handleChange}
                className="form-radio text-amber-700"
              />
              <span className="ml-2">Mrs.</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Only letters and the dot (.) character, followed by a space, are
            allowed.
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Only letters and the dot (.) character, followed by a space, are
            allowed.
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {!isGuest && (
          <>
            <div className="mb-4">
              <h3 className="font-medium mb-2">
                Create an account{" "}
                <span className="text-gray-500">(optional)</span>
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                And save time on your next order!
              </p>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password || ""}
                    onChange={handleChange}
                    className={`w-full p-2 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded`}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    SHOW
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="birthdate" className="block mb-2">
                  Birthdate
                </label>
                <input
                  type="text"
                  id="birthdate"
                  name="birthdate"
                  placeholder="MM/DD/YYYY"
                  value={userData.birthdate || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <p className="text-xs text-gray-500 mt-1">(E.g.: 05/31/1970)</p>
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="receiveOffers"
                    checked={userData.receiveOffers}
                    onChange={handleChange}
                    className="form-checkbox text-amber-700"
                  />
                  <span className="ml-2 text-sm">
                    Receive offers from our partners
                  </span>
                </label>
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="agreeToPrivacy"
                    checked={userData.agreeToPrivacy}
                    onChange={handleChange}
                    className="form-checkbox text-amber-700"
                  />
                  <span className="ml-2 text-sm">
                    Customer data privacy
                    <p className="text-xs text-gray-600">
                      The personal data you provide is used to answer queries,
                      process orders or allow access to specific information.
                      You have the right to modify and delete all the personal
                      information found in the &quot;My Account&quot; page.
                    </p>
                  </span>
                </label>
              </div>
            </div>
          </>
        )}

        <div className="text-right">
          <button
            type="submit"
            className="bg-amber-700 text-white px-6 py-2 rounded"
          >
            CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
}
