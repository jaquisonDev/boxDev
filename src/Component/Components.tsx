import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { PropsAreaLogo } from '../Types/types';

// Container do Login
export const ContainerLogin = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
`;


// Container da Home page
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 124px);

    .checked {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    span {
        margin: 10px;
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
    }
`;

// Container do cadastro
export const ContainerRegister = styled.div`
    display: grid;
`;

// Container da despesa extra
export const ContainerExpenseEx = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;


// ----------------------------------------- AREA LOGIN

// Title
export const Title = styled.h1`
    font-family: 'login', sans-serif;
    font-size: 40px;
    
    .title {
        margin-bottom: -3px;
    }
`;

// Area da logo
export const AreaLogo = styled.div<PropsAreaLogo>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.secondary ? '#fff' : '#646FD4'};

    .text-logo {
        width: 400px;
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        text-align: justify;
        color: #cdcce6;
    }
    
`;

// Area do login
export const AreaLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

// Formulário
export const Formulary = styled.form`
    display: flex;
    flex-direction: column;
`;

// Formulário despesa extras
export const FormularyEx = styled(Formulary)`
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 82px);
`;


// Inputs
export const Inputs = styled.input`
    width: 400px;
    height: 2.5rem;
    padding: 0.3rem 10px;
    margin-bottom: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    font-style: italic;
    color: #646FD4;

    border: 1.5px solid #000;
    border-radius: 5px;
    outline: none;
    background: transparent;

    &::placeholder {
        color: #ccc;
        font-size: 17px;
        font-style: italic;
        font-weight: bold;
    }
`;

// Botão do login
export const ButtonLogin = styled.button`
    padding: 0.9rem;
    background-color: #646FD4;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.2rem;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
`;

// -------------------------------------LINKS
// Link para redefinir senha
export const LinkPassword = styled.a`
    text-decoration: none;
    margin-top: 10px;
    color: #646FD4;
    font-weight: bold;
    font-style: italic;
`;

// Link para voltar para home page
export const LinkToBackHome = styled(Link)`
    position: absolute;
    top: 90px;
    right: 5px;
    clip-path: circle();
    background-color: #000;

    img {
        width: 50px;
    }
`;

// botão(link-menu) para Controle de fluxo
export const menuLink = styled.div`
    position: absolute;
    left: 1rem;
    top: 6rem;
    background-color: #646fd4;
    padding: 0.8rem 4rem;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
`;

// links para as respectivas areas
export const linkItem = styled(Link)`
    
`;

// Menu items
export const menuItems = styled.div`
    position: absolute;
    top: 9rem;
    left: 1rem;
    width: 261px;
    height: auto;
    background-color: rgba(100,111,212, 0.8);
    color: #000;
    font-weight: bold;

    ul {
        list-style: none;
    }
    ul li {
        font-size: 20px;
        padding: 10px;
    }
    ${linkItem} {
        color: #fff;
        text-decoration: none;
    }
`;

// ------------------------------------------- AREA HOME

// Header
export const Header = styled.header`
    background-color: #646fd4;
    padding: 1rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;

    span {
        margin-left: 10px;
    }
    div {
        display: flex;
        align-items: center;
    }
`;

// Cabeçalho do cadastro
export const HeaderRegister = styled(Header)`
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }
`;

// Menu Hamburguer
// Linhas do menu drop
export const Line = styled.div``;

export const Menu = styled.div`
    display: inline-block;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    ${Line} {
        width: 30px;
        height: 4px;
        background-color: #fff;
        margin-bottom: 3px;
        border-radius: 2px;
    }

    .drop {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 80px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        right: 0px;
    }
    &:hover .drop {
        display: block;
    }
    .drop p {
        color: #000;
    }
`;

// Menu Lateral página Home
export const MenuLeft = styled.aside`
    background-color: #646fd4;
    height: 100vh;

    .logo-menu {
        display: flex;
        align-items: center;
        color: #fff;
    }
`;

// Menu icone
export const MenuIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .drop {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 80px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        left: 0;
    }
    &:hover .drop {
        display: block;
    }
    .drop p {
        color: #000;
    }
`;

// Link para logoff
export const Logoff = styled(Link)`
    text-decoration: none;
    font-size: 18px;
`;

// Area de acesso as outras telas
export const ButtonCard = styled.div`
    width: 15rem;
    height: 12rem;
    background-color: #646fd4;
    color: #fff;
    margin: 0 15px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    span {
        font-size: 28px;
        font-weight: bold;
        font-style: italic;
        padding: 10px;
    }
    img {
        margin-top: -15px;
    }
    .pix,
    .companie  {
        margin-top: -25px;
    }
    .car {
        margin-top: -30px;
    }
`;
    
// Rodapé
export const Footer = styled(Header)`
    padding: 1.3rem;
`;

// ---------------------------------- AREA REGISTER

// Formulário do cadastro
export const FormRegister = styled(Formulary)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    padding: 10px 20px;

    .info-p,
    .info-a {
        border-right: 1px solid #000;
        padding-right: 2px;
    }

    
    div h2 {
        text-align: left;
        margin-left: 10px;
    }
`;

// Inputs do cadastro
export const InputsRegister = styled(Inputs)`
    width: 260px;
    margin: 10px 10px;
    padding: 0.1rem 10px;

`;

// Botão do cadastro
export const ButtonRegister = styled(ButtonLogin)`
    padding: 0.9rem 5rem;
    margin-left: 10px;
    margin-top: 1.5rem;
    margin-bottom: 40px;
`;

// Botão de confirmação
export const ButtonConfirm = styled(ButtonLogin)`
    padding: 0.9rem 6rem;
`;

// --------------------------------------------AREA PIX
// botão
export const ButtonPix = styled(ButtonLogin)`
    padding: 0.8rem 8.4rem;    
`;

// --------------------------------------------AREA DESPESAS EXTRAS
// botão
export const ButtonDespEx = styled(ButtonLogin)`
    padding: 0.8rem 6.6rem;    
`;
