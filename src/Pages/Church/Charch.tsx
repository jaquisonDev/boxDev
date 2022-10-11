import * as C from '../../Component/Components';
import logo2 from '../assets/Logo SS.png';
import home from '../assets/Home.png';
import iconIg from '../assets/Igreja.png';
import { useState } from 'react';

export const Church = () => {

    const [showMenuOption, setShowMenuOption] = useState<boolean>(false);

    const showMenu = () => {
        setShowMenuOption(true);

        verifyMenuOption();
    }
    const verifyMenuOption = () => {
        showMenuOption ? setShowMenuOption(false) 
            : setShowMenuOption(true);
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

            <C.ContainerExpenseEx>
                <C.LinkToBackHome to='/home'>
                    <img src={home} alt="" />
                </C.LinkToBackHome>

                <C.AreaLogo secondary>
                    <C.menuLink onClick={showMenu}>Menu de controle</C.menuLink>
                    {showMenuOption && 
                        <C.menuItems>
                            <ul>
                                <li>
                                    <C.linkItem to='/'>Atualizar</C.linkItem>
                                </li>
                                <li>
                                    <C.linkItem to='/'>Pesquisar</C.linkItem>
                                </li>
                                <li>
                                    <C.linkItem to='/'>Remover</C.linkItem>
                                </li>
                            </ul>
                        </C.menuItems>
                    }
                    <img src={iconIg} alt="" width={200}/>
                    <span className='text-logo'>
                        Aqui você tem o controle das empresas (parceiras) cadastradas.
                        Cadastre mais empresas (parceiras) e monitore as já existentes,
                        controlando seus fluxos como: cadastrar, atualizar, buscar e excluir.
                    </span>
                </C.AreaLogo>
                
                <C.FormularyEx onSubmit={e => e.preventDefault()}>
                    <C.Title>
                        <span className='title'>Igrejas</span>
                        <img src={iconIg} alt="icone do titulo" width={50}/>
                    </C.Title>

                    <C.Inputs type='text' placeholder='Nome...'/>
                    <C.Inputs type='text' placeholder='Logradouro...'/>
                    <C.Inputs type='text' placeholder='Valor R$...'/>
                    <C.Inputs type='date'/>

                    <C.ButtonDespEx>Cadastrar Empresa</C.ButtonDespEx>
                </C.FormularyEx>
            </C.ContainerExpenseEx>
        </div>
    );
}