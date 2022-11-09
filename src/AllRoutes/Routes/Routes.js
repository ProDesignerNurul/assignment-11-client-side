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
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                
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
        element: <div className="text-8xl text-center flex justify-center items-center text-red-500">404 <br /> <br /> Wrong URL, Please Enter A Valid URL  </div>
    }
]);

export default routes;