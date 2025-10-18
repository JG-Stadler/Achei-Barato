import Logo from '../../images/logo-achei-barato-fundo-transparente.png';
import './menu.css';
import BarraDeBusca from './barra-de-busca';

export default function MenuPrincipal(){
    return(
        <header className='menu-principal'>
            <img src={Logo} alt="Logo" className='logo'/>
            <BarraDeBusca/>
        </header>
    );
}