import { useState } from "react";
import Select from "react-select";
import { Option } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";

const monthDropdownOptions: Option[] = [
  { value: "6", label: "6 months" },
  { value: "12", label: "12 months" },
];

type Props = {
  color?: string;
  onMonthChange?: (months: number) => void;
};

const MonthDropdown = ({ color, onMonthChange }: Props) => {
  const [monthDropdown, setMonthDropdown] = useState<Option>(monthDropdownOptions[0]);
  const darkMode = useAppSelector((state) => state.theme.isDark);

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      setMonthDropdown(selectedOption);
      if (onMonthChange) {
        onMonthChange(parseInt(selectedOption.value));
      }
    }
  };

  return (
    <Select
      options={monthDropdownOptions}
      className="ar-select"
      value={monthDropdown}
      onChange={handleChange}
      placeholder="6 months"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "transparent",
          color: color || (darkMode ? "#c4c4c4" : "#222222"),
          fontSize: 14,
          borderColor: darkMode ? "rgba(255, 255, 255, 0.12)" : "#dbeaea",
        }),

        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: color || (darkMode ? "#c4c4c4" : "#222222"),
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: color || (darkMode ? "#c4c4c4" : "#222222"),
        }),
      }}
    />
  );
};

export default MonthDropdown;