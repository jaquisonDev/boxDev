import * as C from '../Component/Components';
import logo from '../assets/Logo S.png';
import { useNavigate } from 'react-router-dom';
import { Validation } from '../Validation/validate';
import { useState } from 'react';

export const Login = () => {

    const [fieldEmail, setFieldEmail] = useState('');
    const [fieldPass, setFieldPass] = useState('');

    let navigate = useNavigate();
    
    const validFields = () => {
        let validation = Validation.fieldsLogin(fieldEmail, fieldPass);
        
        if(validation.fieldEmail && validation.fieldPass) {
            navigate('/home');
        }

        if(fieldEmail === "" && fieldPass === "") {
            alert("Preencha todos os campos!!!");
            return;
        }

        if(fieldEmail === "") {
            alert("Preencha o email!! Não pode ser vazio.");
            return;
        }

        if(fieldPass === "") {
            alert("Preencha à Senha!! Não pode ser vazio.");
            return;
        }

    }

    return(
        <C.ContainerLogin>
            <C.AreaLogo>
                <img src={logo} alt="Imagem da logo do serlivre" width={600}/>
            </C.AreaLogo>

            <C.AreaLogin>
                <C.Title>Login</C.Title>

                <C.Formulary onSubmit={Validation.submitForm}>
                    <C.Inputs 
                        type="text" 
                        placeholder='email...'
                        value={fieldEmail}
                        onChange={e => setFieldEmail(e.target.value)}
                    />
                    <C.Inputs 
                        type="password" 
                        placeholder='Senha...'
                        value={fieldPass}
                        onChange={e => setFieldPass(e.target.value)}
                    />

                    <C.ButtonLogin onClick={validFields}>Logar Adm</C.ButtonLogin>
                    <C.LinkPassword href='#'>Esqueci minha senha? Clique aqui!!</C.LinkPassword>
                </C.Formulary>

            </C.AreaLogin>
        </C.ContainerLogin>
    ); 
}