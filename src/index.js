import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App';
import store from './redux';

import './index.module.scss';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <App />
  </LocalizationProvider>
</Provider>);
