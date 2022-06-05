import * as C from '../Component/Components';
import logo2 from '../assets/Logo SS.png';
import home from '../assets/home.png';
import { useState } from 'react';
import check from '../assets/check.png';
import { useNavigate } from 'react-router-dom';
import { Validation } from '../Validation/validate';

export const Register = () => {

    // Info pessoais
    const [fieldName, setFieldName] = useState('');
    const [fieldCpf, setFieldCpf] = useState('');
    const [fieldRg, setFieldRg] = useState('');
    const [fieldSus, setFieldSus] = useState('');
    const [fieldCertNasc, setFieldCertNasc] = useState('');
    const [fieldStateCivil, setFieldStateCivil] = useState('');
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
    const [fieldDisp, setFieldDisp] = useState('');
    // Info dos pais(responsaveis)
    const [fieldNameMother, setFieldNameMother] = useState('');
    const [fieldNameFather, setFieldNameFather] = useState('');
    const [fieldPhone, setFieldPhone] = useState('');

    const [show, setShow] = useState(false);
    let navigate = useNavigate();

    const backPage = () => {
        navigate('/home');
    }
    const dataUsers = () => {
        Validation.fieldsRegisters.infoPessoais(
            fieldName,
            fieldCpf,
            fieldRg,
            fieldSus,
            fieldCertNasc,
            fieldStateCivil
        );
        Validation.fieldsRegisters.infoAddress(
            fieldLog,
            fieldState,
            fieldCity
        );
        Validation.fieldsRegisters.infoExtras(
            fieldVicios,
            fieldEnf,
            fieldPreso,
            fieldDisp,
            fieldArtigo,
            fieldProcess,
        );
        Validation.fieldsRegisters.infoResp(
            fieldNameMother,
            fieldNameFather,
            fieldPhone
        );
        
        // setShow(true);
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

                    <C.FormRegister onSubmit={Validation.submitForm}>
                        <div className='info-p'>
                            <h2>Informações Pessoais</h2>

                            <C.InputsRegister 
                                type="text" 
                                placeholder='Nome...'
                                value={fieldName}
                                onChange={e => setFieldName(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Cpf...'
                                value={fieldCpf}
                                onChange={e => setFieldCpf(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Rg...'
                                value={fieldRg}
                                onChange={e => setFieldRg(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Cart. Sus...'
                                value={fieldSus}
                                onChange={e => setFieldSus(e.target.value)}
                            />    
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Cert. Nasc(Opcional)...'
                                value={fieldCertNasc}
                                onChange={e => setFieldCertNasc(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Estado civil...'
                                value={fieldStateCivil}
                                onChange={e => setFieldStateCivil(e.target.value)}
                            />
                        </div>
                        <div>
                            <h2>Logradouro</h2>
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Logradouro...'
                                value={fieldLog}
                                onChange={e => setFieldLog(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Cidade...'
                                value={fieldCity}
                                onChange={e => setFieldCity(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Estado...'
                                value={fieldState}
                                onChange={e => setFieldState(e.target.value)}
                            />
                        </div>
                        <div className='info-a'>
                            <h2>Informações Adicionais</h2>
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Vicios...'
                                value={fieldVicios}
                                onChange={e => setFieldVicios(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Enfermidade...'
                                value={fieldEnf}
                                onChange={e => setFieldEnf(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Esteve preso?...'
                                value={fieldPreso}
                                onChange={e => setFieldPreso(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Processo...'
                                value={fieldProcess}
                                onChange={e => setFieldProcess(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='N° artigo...'
                                value={fieldArtigo}
                                onChange={e => setFieldArtigo(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Está disposto?...'
                                value={fieldDisp}
                                onChange={e => setFieldDisp(e.target.value)}
                            />
                        </div>
                        <div>
                            <h2>Informações do responsável</h2>
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Nome do pai...'
                                value={fieldNameFather}
                                onChange={e => setFieldNameFather(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Nome da mãe...'
                                value={fieldNameMother}
                                onChange={e => setFieldNameMother(e.target.value)}
                            />
                            <C.InputsRegister 
                                type="text" 
                                placeholder='Fone...'
                                value={fieldPhone}
                                onChange={e => setFieldPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <C.ButtonRegister onClick={dataUsers}>Cadastrar</C.ButtonRegister>
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