import { useEffect, useState } from "react";
import CardProduto from "./card_produto";
import './showcase.css';

export default function ShowCase() {
  const [ListaDeProdutos, setListaDeProdutos] = useState([]);

  useEffect(() => {
    fetch('/data/produtos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao carregar produtos.json");
        }
        return response.json();
      })
      .then(data => setListaDeProdutos(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className="vitrine">
      {ListaDeProdutos.map((produto, index) => (
        <CardProduto
          key={index}
          NomeDoProduto={produto.NomeDoProduto}
          ValorDoProduto={produto.ValorDoProduto}
          ImagemProduto={produto.URLimagem}
          URLShopee={produto.URLShopee}
        />
      ))}
    </main>
  );
}
