import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import PropTypes from "prop-types";
import tableColumns from "./columns";
import useFetchData from "../hooks/useFetchData";

const Table = ({ apiRoute }) => {

  // Fetches data from api based on apiRoute
  const { data, loading, error } = useFetchData(apiRoute);

  const handleEditUser = (info)=>{console.log(info);}
  const handleCreateUser = (info)=>{console.log(info);}

  const table = useMaterialReactTable({
    data: data,
    columns: tableColumns[apiRoute],
    enableColumnOrdering: true, 
    enableEditing: true,
    createDisplayMode: 'modal',
    onCreatingRowSave: handleCreateUser,
    onEditingRowSave: handleEditUser,
  })

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <MaterialReactTable table={table}/>
    </div>
  );
};

Table.propTypes = {
  apiRoute: PropTypes.string.isRequired,
};

export default Table;
