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
    let apiCheck= ''

    if (props.apiRoute == 'municipios') {
        apiCheck = 'gobernador'
    } else if (props.apiRoute == 'proyectos' || props.apiRoute == 'eventos' || props.apiRoute == 'viviendas') {
        apiCheck = 'municipios'
    } else if (props.apiRoute == 'personas') {
        apiCheck = 'viviendas'
    }

    return(
        <>
        <DialogTitle variant="h3">{props.title}</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {props.internalEditComponents.map((component, index) => {
            
            if (component.props.cell.column.id === 'municipio_nombre') {
              return null;
            }
            return component;
          })}
        {props.apiRoute == 'departamentos' || props.apiRoute == null ? null: <>
            <p className='text-left text-zinc-300 mt-2 '>{apiCheck.charAt(0).toUpperCase() + apiCheck.slice(1).split('s')[0]}</p>
            <Options apiRoute={apiCheck} value={props.selectedValue} onChange={props.handleDropdownChange}/> 
        </>}

        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={props.table} row={props.row}/>
        </DialogActions>
      </>
    )
}

export default CEDialog