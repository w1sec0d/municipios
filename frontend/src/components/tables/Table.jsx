import PropTypes from "prop-types";

import { 
  MaterialReactTable, 
  MRT_EditActionButtons, 
  MRT_SelectCheckbox, 
  useMaterialReactTable 
} from "material-react-table";
import { 
  Box, 
  Button, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  IconButton, 
  Tooltip 
} from "@mui/material";

//Icon imports
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventIcon from '@mui/icons-material/Event';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import KeyIcon from '@mui/icons-material/Key';
import GroupIcon from '@mui/icons-material/Group';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

//Component imports
import tableColumns from "./columns";
import useFetchData from "../../hooks/useFetchData";
import ConfirmDialog from "../ConfirmDialog";
import ViewDialog from "../ViewDialog";
import CEDialog from "../Dialog";

import { useState } from "react";
import { createData, updateData, deleteData } from "../../services/apiService";
import validationSchemas from "../../services/validations";
import showValidationErrors from "../../services/showValidationResult";
import { useNotification } from "../NotificationContext";


const ExtraButton = ({title, api, row, func, Icon}) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={() => func(row, api)}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}

const transformEmptyStringsToNull = (obj) => {
  const transformedObj = {};
  for (const key in obj) {
    if (obj[key] === "") {
      transformedObj[key] = null;
    } else {
      transformedObj[key] = obj[key];
    }
  }
  return transformedObj;
};


const Table = ({ apiRoute }) => {
  const showNotification = useNotification();
  
  // Fetches data from api based on apiRoute
  const [reload, setReload] = useState(false);
  const { data, loading, error } = useFetchData(apiRoute, reload);
  const [deleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false);
  const [ViewModalOpen, setViewModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [view, setView] = useState(null);
  const [apiId, setApiId] = useState(null);
  const [title, setTitle] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  // Id name of the table "id_persona", "id_vivienda" etc
  const idName = "id_" + apiRoute.slice(0, -1);

  const handleEdit = async (info) => {

    const transformedValues = transformEmptyStringsToNull({
      ...info.values,
      [apiRoute == 'municipios' ? 'gobernador': 'municipio_nombre']: selectedValue,
      departamento_nombre: selectedValue2,
    });          

    console.log({transformedValues});
    
    try {
      await validationSchemas[apiRoute].validate(transformedValues, {
        abortEarly: false,
      });
      const id = info.row.original[idName] ?? transformedValues[idName]
      console.log("iNFO");
      console.log(info.row);

      
      console.log();
      const res = await updateData(apiRoute, id, transformedValues);
      

      // Only if the update was successful
      if(res.status === 200){
        showNotification("success", "Editado exitosamente");
        info.table.setEditingRow(null); // Cerrar el modal de edición
        setReload(!reload);
      }else if(res.status === 409){
        showNotification("error", "ID repetido! Intentalo de nuevo");
      }
    } catch (validationErrors) {
      console.error("Validation errors:", validationErrors.inner);
      showValidationErrors(validationErrors, "Error al actualizar ");
      showNotification("error", "Error al actualizar");
    }
  };
  const handleCreate = async (info) => {
    console.log("creating:");
    console.log({info});
    const transformedValues = transformEmptyStringsToNull({...info.values, 
      [apiRoute == 'municipios' ? 'gobernador': 'municipio_nombre']: selectedValue,
      departamento_nombre: selectedValue2,});

    try {
      const validation = await validationSchemas[apiRoute].validate(transformedValues, {
        abortEarly: false,
      });
      console.log({ validation });
      
      const res = await createData(apiRoute, transformedValues);

      console.log({res});
      
      if(res.status === 200){
        setReload(!reload);
        showNotification("success", "Creado exitosamente");
        info.table.setCreatingRow(null); // Cerrar el modal de creación
      }else if(res.status === 409){
        showNotification("error", "ID repetido! Intentalo de nuevo");
      }else if(res.status === 400){
        showNotification("error", "Revisa que los datos esten completos");
      }
    } catch (validationErrors) {
      console.error("Validation errors:", validationErrors.inner);
      showValidationErrors(validationErrors, "Error al crear");
      showNotification("error", "Error al crear");

    }
  };

  const handleDelete = async(row) => {
    console.log("deleting id:");
    console.log(row.original[idName]);
    setDeleteConfirmModalOpen(false);
    const res = await deleteData(apiRoute, row.original[idName]);
    console.log({res});
    
    if(res.status === 200){
      setReload(!reload);
      showNotification("success", "Eliminado exitosamente");
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDropdownChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const openDeleteConfirmModal = (row) => {
    setRowToDelete(row);
    setDeleteConfirmModalOpen(true);
  };

  const openViewModal = (row, viewName) => {
    console.log(row.original);
    apiRoute=='viviendas' ? setTitle( `Mostrando ${viewName} de ${row.original['direccion']}` )
                          :setTitle( `Mostrando ${viewName} de ${row.original['nombre']}` );
    setView(`${apiRoute}/${viewName}`); 
    setApiId(row.original[idName]);
    setViewModalOpen(true);
  }

  const table = useMaterialReactTable({
    data: data,
    columns: tableColumns[apiRoute],
    enableColumnOrdering: true,
    enableEditing: true,
    createDisplayMode: 'modal',
    onCreatingRowSave: handleCreate,
    onEditingRowSave: handleEdit,
    getRowId: (row) => row.id,
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <CEDialog 
        title="Editar elemento"
        table={table} 
        row={row} 
        internalEditComponents={internalEditComponents} 
        apiRoute={apiRoute == 'proyectos' ||apiRoute =='eventos'? null: apiRoute} 
        selectedValue={selectedValue}
        selectedValue2={selectedValue2} 
        setSelectedValue={setSelectedValue}
        setSelectedValue2={setSelectedValue2}
        handleDropdownChange={handleDropdownChange}
        handleDropdownChange2={handleDropdownChange2}/>
    ),
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <CEDialog 
        title="Crear nuevo"
        table={table} 
        row={row} 
        internalEditComponents={internalEditComponents} 
        apiRoute={apiRoute} 
        selectedValue={selectedValue} 
        selectedValue2={selectedValue2}
        handleDropdownChange={handleDropdownChange}
        handleDropdownChange2={handleDropdownChange2}/>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon className="text-white"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {/* Event button for municipalities*/}
        {apiRoute == 'municipios' ? <ExtraButton title="Events" Icon={EventIcon} api='eventos' row={row} func={openViewModal}/>
                                  : null}

        {/* municipalities button for departments*/}
        {apiRoute == 'departamentos' ? <ExtraButton title="Municipalities" Icon={LocationCityIcon} api='municipios' row={row} func={openViewModal}/>
                                  : null}

        {/*person buttons*/}
        {apiRoute == 'personas' ? 
        <>
        <ExtraButton title="Dependants" Icon={FamilyRestroomIcon} api='dependientes' row={row} func={openViewModal}/>
        <ExtraButton title="properties" Icon={KeyIcon} api='propiedades' row={row} func={openViewModal}/>
        </>
                                  :null}
        
        {/* residens button for homes*/}
        {apiRoute == 'viviendas' ? <ExtraButton title="Residents" Icon={GroupIcon} api='residentes' row={row} func={openViewModal}/>
                                  : null}

        {/* in chanrge person button for proyects*/}
        {apiRoute == 'proyectos' ? <ExtraButton title="In charge" Icon={EmojiPeopleIcon} api='encargados' row={row} func={openViewModal}/>
                                  : null}

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
    muiTableProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        caption: {
          captionSide: 'top',
        },
      },
    },
    //Table header props
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: '#27272a',
        color: '#4FDBFF',
        fontFamily: 'Raleway',
      },
    },
    muiTableToolbarButtonProps: {
      sx: {
        color: 'white', // Cambiar el color de los iconos de la barra de herramientas
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
    <div className="p-[20px]">
      <h1 className="text-zinc-100 text-2xl font-bold tracking-wider my-7">Lista de {apiRoute}</h1>
      <MaterialReactTable table={table}/>
      <ConfirmDialog isOpen={deleteConfirmModalOpen} setIsOpen={setDeleteConfirmModalOpen} onConfirm={()=>handleDelete(rowToDelete)}/>
      <ViewDialog isOpen={ViewModalOpen} setIsOpen={setViewModalOpen} onConfirm={()=>handleDelete(rowToDelete)} apiRoute={view} id={apiId} title={title}/>
    </div>
  );
};

Table.propTypes = {
  apiRoute: PropTypes.string.isRequired,
};

export default Table;
