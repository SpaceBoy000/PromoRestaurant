import { createTheme } from '@mui/material';

const useCustomTheme = () => {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#445626'
      },
      secondary: {
        main: '#7c9d45'
      }
    }
  });

  return { customTheme };
}

export default useCustomTheme;