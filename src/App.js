import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import About from './Compornets/About/About';
import Shop from './Compornets/Shop/Shop';


function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element:<Main></Main>,
      children:[
        {
          path: '/',
          element: <Shop></Shop>,
        },
        {
          path: 'about',
          element: <About></About>,
        },
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
