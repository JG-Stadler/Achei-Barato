import { IoSearch } from "react-icons/io5";

export default function BarraDeBusca(){
    return(
        <div className="caixa-de-pesquisa">
            <input type="search" placeholder="Pesquisar"/>
            <button className="botao-efetuar-pesquisa">
                <IoSearch className="lupa"/>
            </button>
        </div>
    );
}