import * as C from '../../Component/Components';
import logo2 from '../assets/Logo SS.png';
import iconR from '../assets/User.png';
import iconD from '../assets/Desp.png';
import iconEm from '../assets/empresa.png';
import iconC from '../assets/Carnes.png';
import iconI from '../assets/Igreja.png';
import iconE from '../assets/esc.png';
import iconF from '../assets/familia.png';
import pix from '../assets/pix.png';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    let navigate = useNavigate();

    const register = () => {
        navigate('/home/register');
    }
    const companies = () => {
        navigate('/home/companies');
    }
    const viewPix = () => {
        navigate('/home/pix');
    }
    const carne = () => {
        navigate('/home/carne');
    }
    const charch = () => {
        navigate('/home/church');
    }
    const office = () => {
        navigate('/home/office');
    }
    const family = () => {
        navigate('/home/family');
    }

    return(
        <div>
            <C.Header>
                <div>
                    <img src={logo2} alt="" width={50}/>
                    <span>serlivre</span>
                </div>

                <C.Menu>
                    <C.Line></C.Line>
                    <C.Line></C.Line>
                    <C.Line></C.Line>
                    <div className='drop'>
                        <C.Logoff to='/'>Logoff</C.Logoff>
                    </div>
                </C.Menu>
            </C.Header>

            <C.Container>
                <C.ButtonCard onClick={register}>
                    <img src={iconR} alt="icone de cadastro" />
                    <span>Cadastro</span>
                </C.ButtonCard>

                <C.ButtonCard>
                    <img src={iconD} alt="icone de despesa" />
                    <span>Despesas G.</span>
                </C.ButtonCard>

                <C.ButtonCard onClick={carne}>
                    <img src={iconC} alt="icone dos carnês" width={150} className='car'/>
                    <span>Carnês</span>
                </C.ButtonCard>

                <C.ButtonCard onClick={charch}>
                    <img src={iconI} alt="icone de igreja" />
                    <span>Igrejas</span>
                </C.ButtonCard>

                <C.ButtonCard onClick={office}>
                    <img src={iconE} alt="icone de escritorio" />
                    <span>Escritório</span>
                </C.ButtonCard>

                <C.ButtonCard onClick={family}>
                    <img src={iconF} alt="icone de familia" />
                    <span>Familias</span>
                </C.ButtonCard>

                <C.ButtonCard onClick={companies}>
                    <img src={iconEm} className='companie' alt="icone de empresas" width={145}/>
                    <span>Empresas</span>
                </C.ButtonCard>

                <C.ButtonCard onClick={viewPix}>
                    <img src={pix} alt="icone do pix" width={130} className='pix'/>
                    <span>Pix</span>
                </C.ButtonCard>
            </C.Container>
        </div>
    );
}