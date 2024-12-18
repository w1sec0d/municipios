import { 
    Box, 
    Button, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    IconButton, 
    Tooltip 
  } from "@mui/material";

import { 
    MaterialReactTable, 
    MRT_EditActionButtons, 
    MRT_SelectCheckbox, 
    useMaterialReactTable 
  } from "material-react-table";

import Options from "./Options";
import { useState } from "react";

const CEDialog = (props) => {
    return(
        <>
        <DialogTitle variant="h3">Crear nuevo</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {props.internalEditComponents.map((component, index) => {
            // Hide the field with the name 'hiddenFieldName
            
            if (component.props.cell.column.id === 'municipio_nombre') {
              return null;
            }
            return component;
          })}
          {props.apiRoute == 'viviendas' ? 
            <>
              <p className='text-left text-zinc-300 mt-2 '>Municipio</p>
              <Options apiRoute={'municipios'} value={props.selectedValue} onChange={props.handleDropdownChange}/> 
            </>
            : null}

        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={props.table} row={props.row}/>
        </DialogActions>
      </>
    )
}

export default CEDialog