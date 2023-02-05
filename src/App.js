import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import useCustomTheme from './theme/customTheme';

import Home from './pages/Home/Home';
import './App.css';


const App = () => {
  const { customTheme } = useCustomTheme();

  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
