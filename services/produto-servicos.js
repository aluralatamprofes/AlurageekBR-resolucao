//GET
const listaProdutos = () =>
  fetch("http://localhost:3000/producto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUmProduto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const criaProdutos = (name, imageUrl, price) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("Não foi possível criar um produto");
  });
};

// PUT/PATCH
const alteraProduto = async (id, name, price, description) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const produtoServices = {
  listaProdutos,
  listarUmProduto,
  criaProdutos,
  alteraProduto,
  deleteProducto,
};
