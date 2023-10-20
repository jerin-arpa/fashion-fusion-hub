import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Root from '../Pages/Root/Root';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';
import About from '../Pages/About/About';
import Blogs from '../Pages/Blogs/Blogs';
import Contact from '../Pages/Contact/Contact';
import PrivateRoute from './PrivateRoute';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import AddBrands from '../Pages/AddBrands/AddBrands';
import Products from '../Pages/Products/Products';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://fashion-fusion-hub-server-10x2szige-ismat-jerins-projects.vercel.app/brand'),
            },
            {
                path: "/products/:name",
                element: <Products></Products>,
                loader: () => fetch('https://fashion-fusion-hub-server-10x2szige-ismat-jerins-projects.vercel.app/product'),
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('https://fashion-fusion-hub-server-10x2szige-ismat-jerins-projects.vercel.app/product'),
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fashion-fusion-hub-server-10x2szige-ismat-jerins-projects.vercel.app/product/${params.id}`),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/addBrands",
                element: <PrivateRoute><AddBrands></AddBrands></PrivateRoute>,
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://fashion-fusion-hub-server-10x2szige-ismat-jerins-projects.vercel.app/myCart'),
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                loader: () => fetch('/blog.json'),
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
        ]
    },
]);

export default router;