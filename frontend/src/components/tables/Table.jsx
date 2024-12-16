import PropTypes from "prop-types";
import { MaterialReactTable, MRT_EditActionButtons, useMaterialReactTable } from "material-react-table";
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import tableColumns from "./columns";
import useFetchData from "../../hooks/useFetchData";
import ConfirmDialog from "../ConfirmDialog";
import { useState } from "react";
import {createData, updateData, deleteData } from "../../services/apiService";
import { Label } from "@mui/icons-material";

const Table = ({ apiRoute }) => {
  // Fetches data from api based on apiRoute
  const [reload, setReload] = useState(false);
  const { data, loading, error } = useFetchData(apiRoute, reload);
  const [deleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  // Id name of the table "id_persona", "id_vivienda" etc
  const idName = "id_"+ apiRoute.slice(0, -1);

  const handleEdit = async (info)=>{
    console.log("editing:");
    console.log(info);
    await updateData(apiRoute, info.values[idName], info.values);
    setReload(!reload);
  }
  const handleCreate = async (info)=>{
    console.log("creating:");
    console.log(info.values);
    await createData(apiRoute, info.values);
    setReload(!reload);
  }
  const handleDelete = async (row)=> {
    console.log("deleting id:");
    console.log(row.original.id_persona);
    setDeleteConfirmModalOpen(false);
    await deleteData(apiRoute, row.original[idName]);
    setReload(!reload);
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
    onCreatingRowSave: async (info) => {
      await handleCreate(info);
      table.setCreatingRow(false); 
    },
    onEditingRowSave: async (info) => {
      await handleEdit(info);
      table.setEditingRow(null); 
    },
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

    //Table aspect props
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

  return (
    <div style={{ padding: "20px" }}>
      <label className="text-zinc-100">Lista de {apiRoute}</label>
      <MaterialReactTable table={table}/>
      <ConfirmDialog isOpen={deleteConfirmModalOpen} setIsOpen={setDeleteConfirmModalOpen} onConfirm={()=>handleDelete(rowToDelete)}/>
    </div>
  );
};

Table.propTypes = {
  apiRoute: PropTypes.string.isRequired,
};

export default Table;
