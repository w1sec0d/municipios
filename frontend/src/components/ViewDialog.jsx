import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import ViewTable from './tables/ViewTable';
  import PropTypes from 'prop-types';
  
  const ViewDialog = ({isOpen=false, setIsOpen, title="",onConfirm=()=>{}, description="", apiRoute, id} ) => {
    return (
      <Dialog open={isOpen} maxWidth="sm" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={()=>setIsOpen(!isOpen)}>
            <CloseIcon/>
          </IconButton>
        </Box>
        <DialogContent>
          
          <ViewTable apiRoute={apiRoute} id={id}/>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={()=>setIsOpen(!open)}>
            Cancelar
          </Button>
          <Button color="secondary" variant="contained" onClick={onConfirm}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  export default ViewDialog;