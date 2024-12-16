import { useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import PropTypes from "prop-types";
import tableColumns from "./columns";

const Table = ({ apiRoute }) => {
  const [data, setData] = useState([]);

  // Fetch data from the API at first render
  // It fetches from apiroute prop
  useEffect(() => {
    const fetchData = async (route) => {
      const response = await fetch(import.meta.env.VITE_API_URL + "/" + route);
      const data = await response.json();
      setData(data);
    };
    fetchData(apiRoute);
  }, [apiRoute]);

  return (
    <div style={{ padding: "20px" }}>
      <MaterialReactTable columns={tableColumns[apiRoute]} data={data} />
    </div>
  );
};

Table.propTypes = {
  apiRoute: PropTypes.string.isRequired,
};

export default Table;
