import { Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductPage from './components/ProductPage';

function App() {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  };
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
    ]
  }])
  
  return (
    <div style={{fontFamily: 'Montserrat, sans-serif'}}>
      <RouterProvider router={appRouter}/> 
    </div>
  );
}

export default App;
