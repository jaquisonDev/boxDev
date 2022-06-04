import * as C from '../Component/Components';
import logo2 from '../assets/Logo SS.png';
import home from '../assets/home.png';
import { useState } from 'react';
import check from '../assets/check.png';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    // Info pessoais
    const [fieldName, setFieldName] = useState('');
    const [fieldCpf, setFieldCpf] = useState('');
    const [fieldRg, setFieldRg] = useState('');
    const [fieldSus, setFieldSus] = useState('');
    const [fieldCertNasc, setFieldCertNasc] = useState('');
    // Info Endereço
    const [fieldLog, setFieldLog] = useState('');
    const [fieldState, setFieldState] = useState('');
    const [fieldCity, setFieldCity] = useState('');
    // Info Extras
    const [fieldVicios, setFieldVicios] = useState('');
    const [fieldEnf, setFieldEnf] = useState('');
    const [fieldPreso, setFieldPreso] = useState('');
    const [fieldArtigo, setFieldArtigo] = useState('');
    const [fieldProcess, setFieldProcess] = useState('');
    // Info dos pais(responsaveis)
    const [fieldNameMother, setFieldNameMother] = useState('');
    const [fieldNameFather, setFieldNameFather] = useState('');
    const [fieldPhone, setFieldNamePhone] = useState('');

    const [show, setShow] = useState(false);
    let navigate = useNavigate();

    const showArea = () => {
        setShow(true);
    }
    const backPage = () => {
        navigate('/home');
    }

    

    return(
        <div>
            <C.HeaderRegister>
                <div>
                    <img src={logo2} alt="Imagem da logo" width={50}/>
                    SER LIVRE - Serviço de recuperação e Libertação de viciados em drogas
                </div>
                <C.Menu>
                    <C.Line></C.Line>
                    <C.Line></C.Line>
                    <C.Line></C.Line>
                    <div className='drop'>
                        <C.Logoff to='/'>Logoff</C.Logoff>
                    </div>
                </C.Menu>
            </C.HeaderRegister>

            {!show &&
                <C.ContainerRegister>
                    <C.LinkToBackHome to='/home'>
                        <img src={home} alt="" />
                    </C.LinkToBackHome>
                    <C.FormRegister>
                        <div className='info-p'>
                            <h2>Informações Pessoais</h2>
                            <C.InputsRegister type="text" placeholder='Nome...'/>
                            <C.InputsRegister type="text" placeholder='Cpf...'/>
                            <C.InputsRegister type="text" placeholder='Rg...'/>
                            <C.InputsRegister type="text" placeholder='Cart. Sus...'/>
                            <C.InputsRegister type="text" placeholder='Cert. Nasc(Opcional)...'/>
                        </div>
                        <div>
                            <h2>Logradouro</h2>
                            <C.InputsRegister type="text" placeholder='Logradouro...'/>
                            <C.InputsRegister type="text" placeholder='Cidade...'/>
                            <C.InputsRegister type="text" placeholder='Estado...'/>
                            <C.InputsRegister type="text" placeholder='Estado civil...'/>
                        </div>
                        <div className='info-a'>
                            <h2>Informações Adicionais</h2>
                            <C.InputsRegister type="text" placeholder='Vicios...'/>
                            <C.InputsRegister type="text" placeholder='Enfermidade...'/>
                            <C.InputsRegister type="text" placeholder='Esteve preso?...'/>
                            <C.InputsRegister type="text" placeholder='Processo...'/>
                            <C.InputsRegister type="text" placeholder='N° artigo...'/>
                            <C.InputsRegister type="text" placeholder='Está disposto?...'/>
                        </div>
                        <div>
                            <h2>Informações do responsável</h2>
                            <C.InputsRegister type="text" placeholder='Nome do pai...'/>
                            <C.InputsRegister type="text" placeholder='Nome da mãe...'/>
                            <C.InputsRegister type="text" placeholder='Fone...'/>
                        </div>
                        <div>
                            <C.ButtonRegister onClick={showArea}>Cadastrar</C.ButtonRegister>
                        </div>
                    </C.FormRegister>
                </C.ContainerRegister>
            }

            {show && 
                <C.Container>
                    <div className='checked'>
                        <img src={check} alt="imagem de cadastrado" width={150}/>
                        <span>Cadastrado com sucesso!!</span>
                        <C.ButtonConfirm onClick={backPage}>OK</C.ButtonConfirm>
                    </div>
                </C.Container>
            }
        </div>
    );
}