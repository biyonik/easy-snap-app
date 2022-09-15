import { v4 as uuidv4 } from 'uuid';
import HomePage from "../Pages/Home/home.page";
import LoginPage from "../Pages/Login/login.page";
import JoinPage from "../Pages/Join/join.page";

const routes = [
    {id: uuidv4(), path:"/", element:<HomePage />},
    {id: uuidv4(), path:'/login', element: <LoginPage />},
    {id: uuidv4(), path: '/join', element: <JoinPage />}
];

export default routes;