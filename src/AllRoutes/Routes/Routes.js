import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Service from "../../components/AllServices/Service/Service";
import SingleServiceDetails from "../../components/AllServices/TotalServiceDetails/TotalServiceDetails";
import SixServices from "../../components/AllServices/sixServices/SixServices";
import SixServicesDetails from "../../components/AllServices/SixServicesDetails/SixServicesDetails";
import Blogs from "../../components/Blogs/Blogs";
import Home from "../../components/Home/Home";
import Footer from "../../components/share/Footer/Footer";
import Main from "../../Main/Main";
import Login from "../../UserVerify/Login/Login";
import Register from "../../UserVerify/Register/Register";
import MyReview from "../../user/MyReview/MyReview";
import AddService from "../../user/AddService/AddService";
import ErrorPage from "../../errorPage/ErrorPage";

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
            },
            {
                path: '/sixservices/:id',
                element: <SixServices></SixServices>,
                loader: ({params}) => fetch(`https://assignment-11-server-prodesignernurul.vercel.app/services/${params.id}`)
                
            },
            {
                path: '/six-service-details',
                element: <SixServicesDetails></SixServicesDetails>,
                
            },
            {
                path: '/my-review',
                element: <MyReview></MyReview>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            }
            
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default routes;