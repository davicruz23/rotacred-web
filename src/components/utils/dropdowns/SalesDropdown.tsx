import { useState } from "react";
import Select from "react-select";
import { Option } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";

const SalesDropdownOptions: Option[] = [
  { value: "1", label: "Sales" },
  { value: "2", label: "Orders" },
];

const SalesDropdown = () => {
  const [salesDropdown, setSalesDropdown] = useState<Option | null>(null);
  const darkMode = useAppSelector((state) => state.theme.isDark);

  return (
    <Select
      options={SalesDropdownOptions}
      className="ar-select"
      value={salesDropdown}
      onChange={(selectedOption) => setSalesDropdown(selectedOption as Option)}
      placeholder="Sales"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "transparent",
          color: "#1A83FE",
          fontSize: 14,
          borderColor: darkMode ? "rgba(255, 255, 255, 0.12)" : "#dbeaea",
        }),

        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "#1A83FE",
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "#1A83FE",
        }),
      }}
    />
  );
};

export default SalesDropdown;
