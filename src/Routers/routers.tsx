import { useRoutes } from 'react-router-dom';
import { Companies } from '../Pages/Companies/Companies';
import { Home } from '../Pages/Home/Home';
import { Login } from '../Pages/Login/Login';
import { Pix } from '../Pages/Pix/pix';
import { Carne } from '../Pages/Carne/Carne';
import { Register } from '../Pages/Register/Register';
import { Church } from '../Pages/Church/Charch';
import { Office } from '../Pages/Office/Office';
import { Family } from '../Pages/Family/Family';
import { FormStep1} from '../Component/MultiForm/FormStep1';
import { FormStep2} from '../Component/MultiForm/FormStep2';
import { FormStep3} from '../Component/MultiForm/FormStep3';

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
        {path: '/step1', element: <FormStep1 />},
        {path: '/step2', element: <FormStep2 />},
        {path: '/step3', element: <FormStep3 />},
        
        {path: '*', element: <Login />}
    ]);
}