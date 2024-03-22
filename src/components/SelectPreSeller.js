// SelectPreSeller.js
import { useState } from "react";
import ReactSelect from "react-select";
import useFetch from "../httpRequest/useFetch";

const SelectPreSeller = ({ onValueChange }) => {
  const { data, isPending, error } = useFetch(
    "http://mailserver.sukkurbeverages.net:689/react/presell-sync-process/API/get_all_preseller.php"
  );

  const [selectedValue, setSelectedValue] = useState(null);

  const options = data
    ? data.map((item) => ({
        value: item.USER_NAME,
        label: item.USER_NAME,
      }))
    : [];

  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    onValueChange(selectedOption.value);
  };

  return (
    <div>
      <ReactSelect
        isSearchable={true}
        options={options}
        onChange={handleChange}
        value={selectedValue}
      />
    </div>
  );
};

export default SelectPreSeller;
