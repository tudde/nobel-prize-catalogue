import './App.css';
import WelcomeView from './components/WelcomeView';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import YearView from './components/YearView';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './themes/Themes';
import { ThemeContext } from './themes/ThemeContext';
import { useState } from 'react';


function App(){

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const setDarkTheme = (isDarkTheme : boolean) => {
    setIsDarkTheme(isDarkTheme);    
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<WelcomeView/>}></Route>
        <Route path="/nagrody/:languageSelected/:yearSelected" element={<YearView />}></Route>
      </Route>
    )
  )

  return (
    <>
      <ThemeContext.Provider value={{isDarkTheme, setDarkTheme}}>
        <ThemeProvider theme={isDarkTheme ? darkTheme: lightTheme}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
