import './App.css';
import WelcomeView from './components/WelcomeView';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import YearView from './components/YearView';


function App(){

  

  
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
      
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
