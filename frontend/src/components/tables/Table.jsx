import PropTypes from "prop-types";
import { MaterialReactTable, MRT_EditActionButtons, useMaterialReactTable } from "material-react-table";
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import tableColumns from "./columns";
import useFetchData from "../../hooks/useFetchData";
import ConfirmDialog from "../ConfirmDialog";
import { useState } from "react";



const Table = ({ apiRoute }) => {
  // Fetches data from api based on apiRoute
  const { data, loading, error } = useFetchData(apiRoute);
  const [deleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  const handleEditUser = (info)=>{
    console.log("editing user:");
    console.log(info.values);
  }
  const handleCreateUser = (info)=>{
    console.log("creating user:");
    console.log(info.values);
  }
  const handleDeleteUser = (row)=> {
    console.log("deleting id:");
    console.log(row.original.id);
    setDeleteConfirmModalOpen(false);
  }


  const openDeleteConfirmModal = (row) => {
    setRowToDelete(row);
    setDeleteConfirmModalOpen(true);
  }

  const table = useMaterialReactTable({
    data: data,
    columns: tableColumns[apiRoute],
    enableColumnOrdering: true, 
    enableEditing: true,
    createDisplayMode: 'modal',
    onCreatingRowSave: handleCreateUser,
    onEditingRowSave: handleEditUser,
    getRowId: (row) => row.id,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Crear nuevo</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Crear nuevo
      </Button>
    ),
    state: {
      isLoading: loading,
      // isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: error,
      // showProgressBars: isFetchingUsers,
    },
  })

  return (
    <div style={{ padding: "20px" }}>
      <MaterialReactTable table={table}/>
      <ConfirmDialog isOpen={deleteConfirmModalOpen} setIsOpen={setDeleteConfirmModalOpen} onConfirm={()=>handleDeleteUser(rowToDelete)}/>
    </div>
  );
};

Table.propTypes = {
  apiRoute: PropTypes.string.isRequired,
};

export default Table;
