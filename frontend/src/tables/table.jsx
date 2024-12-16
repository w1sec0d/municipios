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
    width: '80%',
    muiTopToolbarProps: {
      sx: {
        backgroundColor: '#27272a',
        color: 'white',
      }
    },
    muiBottomToolbarProps: {
      sx: {
        backgroundColor: '#27272a',
        color: 'white',
      }
    },
    //Table header props
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: '#27272a',
        color: '#4FDBFF',
        fontFamily: 'Raleway',
      },
    },

    muiTableBodyCellProps: {
      sx: {
        color: 'white',
      },
    },
    //Table body props
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        backgroundColor: row.id % 2 === 0 ? '#3f3f46' : '#27272a',
        '&:hover': {
          backgroundColor: '#52525b',
        },
      }
    }),
  })


  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="flex place-content-center text-zinc-100">Lista de { apiRoute }s </h1>
      <MaterialReactTable table={table}/>
    </div>
  );
};

Table.propTypes = {
  apiRoute: PropTypes.string.isRequired,
};

export default Table;
