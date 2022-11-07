import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blogs from "../../components/Blogs/Blogs";
import Home from "../../components/Home/Home";
import Footer from "../../components/share/Footer/Footer";
import Main from "../../Main/Main";

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
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
]);

export default routes;