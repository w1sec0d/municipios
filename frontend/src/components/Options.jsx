
import useFetchData from "../hooks/useFetchData";
import { useState } from "react";

const Options = ({apiRoute, ...props }) => {
    const [reload, setReload] = useState(false);
    const { data, loading, error } = useFetchData(apiRoute, reload);
    
    const options = [];
    for (const [id, values] of Object.entries(data)) {
        if(apiRoute === 'viviendas') options.push(values['direccion'])
        else if (apiRoute === 'personas') options.push(values['id_persona'])
        else options.push(values['nombre'])
    }
    console.log(options)
    return (
      <select className="text-black p-4" {...props}>
        <option selected={true}></option>
        {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  }

  export default Options;