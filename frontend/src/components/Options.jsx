
import useFetchData from "../hooks/useFetchData";
import { useState } from "react";

const Options = ({apiRoute, ...props }) => {
    const [reload, setReload] = useState(false);
    const { data, loading, error } = useFetchData(apiRoute, reload);
    
    const options = [];
    for (const [id, values] of Object.entries(data)) {
        options.push(values['nombre'])
    }
    console.log(options)
    return (
      <select className="text-black p-4" {...props}>
        {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  }

  export default Options;