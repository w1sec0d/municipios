

// ConfirmDialog.jsx
// material ui

// base component by uguremirmustafa
// on: https://dev.to/uguremirmustafa/material-ui-reusable-confirmation-dialog-in-react-2jnl
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

const ConfirmDialog = ({isOpen=false, setIsOpen, title="¿Estás seguro de borrar?",onConfirm=()=>{}, description="¡Esto es para siempre!"} ) => {
  return (
    <Dialog open={isOpen} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={()=>setIsOpen(!isOpen)}>
          <CloseIcon/>
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="error" variant="contained" onClick={()=>setIsOpen(!open)}>
          Cancelar
        </Button>
        <Button color="primary" variant="contained" onClick={onConfirm}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;