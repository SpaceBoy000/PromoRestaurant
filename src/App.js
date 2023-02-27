import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import useCustomTheme from './theme/customTheme';

import Home from './pages/Home/Home';
import AboutUs from './pages/Home/AboutUs';
import OurBusiness from './pages/Home/OurBusiness';
import ContactUs from './pages/Home/ContactUs';
import Diversity from './pages/Home/Diversity';
import Investors from './pages/Home/Investors';
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
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/about' element={<AboutUs />} />
              <Route exact path='/business' element={<OurBusiness />} />
              <Route exact path='/diversity' element={<Diversity />} />
              <Route exact path='/investors' element={<Investors />} />
              <Route exact path='/contact' element={<ContactUs />} />
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
