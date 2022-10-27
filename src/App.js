import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import About from './Compornets/About/About';
import Shop from './Compornets/Shop/Shop';
import Order from './Compornets/Orders/Order';
import Inventory from './Compornets/Invontory/Inventory';
import Products from './Compornets/Products/Products';
import { productsAndCartLoader } from './loaders/ProductsAndCartLoaders';


function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element:<Main></Main>,
      children:[
        {
          path: '/',
          loader:()=>fetch('products.json'),
          element: <Shop></Shop>,
        },
        {
          path: '/order',
          loader:productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: 'about',
          element: <About></About>,
        },
        {
          path:'/inventory',
          element: <Inventory></Inventory>
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
