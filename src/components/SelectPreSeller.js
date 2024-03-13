// SelectPreSeller.js
import {useState} from "react";
import ReactSelect from "react-select";
import useFetch from "../httpRequest/useFetch";
import { ThreeCircles } from "react-loader-spinner";

const SelectPreSeller = ({ onValueChange }) => {
    const {data, isPending, error} = useFetch("http://mailserver.sukkurbeverages.net:689/react/presell-sync-process/API/get_all_preseller.php");
    
    const [selectedValue, setSelectedValue] = useState(null);

    const options = data ? data.map(item => ({
        value: item.USER_NAME,
        label: item.USER_NAME,
    })) : [];

    const handleChange = (selectedOption) => {
        setSelectedValue(selectedOption);
        onValueChange(selectedOption.value);
    };

    return (
        <div>
            {/* {isPending && <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#134d7c"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
            } */}
            <ReactSelect 
                isSearchable={true}
                options={options}
                onChange={handleChange}
                value={selectedValue}
            />
        </div>
    );
}

export default SelectPreSeller;
