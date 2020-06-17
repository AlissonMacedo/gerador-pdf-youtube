import React from "react";

export default function Home() {
  const products = [
    {
      name: "cafe",
      price: 250.0,
      qunt: 10,
    },
    {
      name: "pao",
      price: 50.0,
      qunt: 10,
    },
    {
      name: "milho",
      price: 30.0,
      qunt: 10,
    },
    {
      name: "tomate",
      price: 10.0,
      qunt: 10,
    },
  ];

  function handleSetItem(product) {
    console.log("teste", product);
    localStorage.setItem("pdf", JSON.stringify(product));
  }

  return (
    <>
      <h1>Lista de pedidos</h1>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>preco</th>
            <th>quantidade</th>
            <th>acao</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.qunt}</td>
              <td>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    window.open("/imprimir");
                    handleSetItem(products);
                  }}
                >
                  Acao
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
