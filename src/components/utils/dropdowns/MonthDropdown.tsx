import { useState } from "react";
import Select from "react-select";
import { Option } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";

const monthDropdownOptions: Option[] = [
  { value: "1", label: "6 months" },
  { value: "2", label: "12 months" },
  { value: "3", label: "18 months" },
];

type Props = {
  color?: string;
};

const MonthDropdown = ({ color }: Props) => {
  const [monthDropdown, setMonthDropdown] = useState<Option | null>(null);
  const darkMode = useAppSelector((state) => state.theme.isDark);

  return (
    <Select
      options={monthDropdownOptions}
      className="ar-select"
      value={monthDropdown}
      onChange={(selectedOption) => setMonthDropdown(selectedOption as Option)}
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
