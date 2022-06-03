import { useRoutes } from 'react-router-dom';
import { Companies } from '../Pages/Companies';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Pix } from '../Pages/pix';
import { Carne } from '../Pages/Carne';
import { Register } from '../Pages/Register';
import { Church } from '../Pages/Charch';
import { Office } from '../Pages/Office';
import { Family } from '../Pages/Family';

export const Routers = () => {
    return useRoutes([
        {path: '/', element: <Login />},
        {path: '/home', element: <Home />},
        {path: '/home/register', element: <Register />},
        {path: '/home/companies', element: <Companies />},
        {path: '/home/pix', element: <Pix />},
        {path: '/home/carne', element: <Carne />},
        {path: '/home/church', element: <Church />},
        {path: '/home/office', element: <Office />},
        {path: '/home/family', element: <Family />},
        {path: '*', element: <Login />},
    ]);
}