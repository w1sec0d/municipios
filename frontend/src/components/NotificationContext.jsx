// Generado con Copilot
import { createContext, useContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Slide } from '@mui/material';

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (severity, message) => {
    setNotification({ severity, message });
  };

  const handleClose = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      <Snackbar open={Boolean(notification)} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Posición del Snackbar
        TransitionComponent={Slide}>
        {notification && (
          <Alert
            severity={notification.severity}
            variant="filled"
            sx={{ width: '100%', color: 'white' }}
            onClose={handleClose}
          >
            {notification.message}
          </Alert>
        )}
      </Snackbar>
    </NotificationContext.Provider>
  );
};
