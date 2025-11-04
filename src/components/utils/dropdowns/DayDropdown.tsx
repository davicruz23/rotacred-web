import { useState } from "react";
import Select from "react-select";
import { Option } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";

const dayDropdownOptions: Option[] = [
  { value: "1", label: "7 Days" },
  { value: "2", label: "15 Days" },
  { value: "3", label: "30 Days" },
];

type Props = {
  color?: string;
  fontSize?: number;
  height?: number;
};

const DayDropdown = ({ color, fontSize, height }: Props) => {
  const [dayDropdown, setDayDropdown] = useState<Option | null>(null);
  const darkMode = useAppSelector((state) => state.theme.isDark);

  return (
    <Select
      options={dayDropdownOptions}
      className="ar-select"
      value={dayDropdown}
      onChange={(selectedOption) => setDayDropdown(selectedOption as Option)}
      placeholder="7 Days"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "transparent",
          color: color || (darkMode ? "#c4c4c4" : "#222222"),
          fontSize: fontSize ? fontSize : 14,
          minHeight: height ? height : 38,
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
        indicatorsContainer: (baseStyles) => ({
          ...baseStyles,
          height: height ? height : 38,
          padding: "0",
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          padding: "2px 5px",
        }),
      }}
    />
  );
};

export default DayDropdown;
