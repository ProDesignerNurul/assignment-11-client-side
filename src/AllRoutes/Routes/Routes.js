import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Service from "../../components/AllServices/Service/Service";
import Blogs from "../../components/Blogs/Blogs";
import Home from "../../components/Home/Home";
import Footer from "../../components/share/Footer/Footer";
import Main from "../../Main/Main";
import Login from "../../UserVerify/Login/Login";
import Register from "../../UserVerify/Register/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <Service></Service>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default routes;