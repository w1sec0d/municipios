import { MaterialReactTable } from "material-react-table";
import PropTypes from "prop-types";
import tableColumns from "./columns";
import useFetchData from "../hooks/useFetchData";

const Table = ({ apiRoute }) => {

  // Fetches data from api based on apiRoute
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
