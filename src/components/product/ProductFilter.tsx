// components/ProductFilters.tsx
"use client";
import { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

const filterSections: FilterSection[] = [
  {
    title: "CATEGORIES",
    options: [
      { id: "cartridge", label: "Cartridge", count: 8 },
      { id: "votives", label: "Votives", count: 13 },
      { id: "tea-lights", label: "Tea Lights", count: 7 },
    ],
  },
  {
    title: "SIZE",
    options: [
      { id: "s", label: "S", count: 2 },
      { id: "m", label: "M", count: 2 },
      { id: "l", label: "L", count: 2 },
      { id: "xl", label: "XL", count: 2 },
    ],
  },
  {
    title: "COLOR",
    options: [
      { id: "white", label: "White", count: 4 },
      { id: "black", label: "Black", count: 4 },
    ],
  },
];

const ProductFilters = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(
    {}
  );

  const handleFilterClick = (sectionId: string, optionId: string) => {
    setActiveFilters((prev) => {
      const sectionFilters = prev[sectionId] || [];
      const updated = sectionFilters.includes(optionId)
        ? sectionFilters.filter((id) => id !== optionId)
        : [...sectionFilters, optionId];

      const newFilters = {
        ...prev,
        [sectionId]: updated,
      };

      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="space-y-8">
      {filterSections.map((section) => (
        <div key={section.title} className="border-b pb-6">
          <h3 className="font-medium mb-4">{section.title}</h3>
          <div className="space-y-2">
            {section.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={activeFilters[section.title]?.includes(option.id)}
                  onChange={() => handleFilterClick(section.title, option.id)}
                  className="rounded border-gray-300 text-[#B87159] focus:ring-[#B87159]"
                />
                <span className="text-gray-700">{option.label}</span>
                <span className="text-gray-500 text-sm">({option.count})</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFilters;
