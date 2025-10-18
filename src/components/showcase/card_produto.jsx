import { useState } from 'react';
import fototeste from '../../images/logo-achei-barato.png';

export default function CardProduto(props){

    return(
        <>
            <a href={props.URLShopee} className='linkProduto'>
                <div className="card-produto">
                    <img src={props.ImagemProduto} alt="Foto Produto" className="foto-produto"/>
                    <h1 className="nome-produto">{props.NomeDoProduto}</h1>
                    <h2 className="valor-produto">R${props.ValorDoProduto}</h2>
                </div>
            </a>
        </>
    );
}