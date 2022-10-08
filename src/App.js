
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
