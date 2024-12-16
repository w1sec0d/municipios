import { useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import PropTypes from "prop-types";
import tableColumns from "./columns";
import useFetchData from "../hooks/useFetchData";

const Table = ({ apiRoute }) => {
  // Fetch data from the API at first render
  // It fetches from apiroute prop
  const { data, loading, error } = useFetchData(apiRoute);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }
  
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
