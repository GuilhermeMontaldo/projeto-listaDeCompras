// adicionando as variaveis.
const submitForm = document.getElementById("addItemForm");
const input = document.getElementById("addItem");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === "") {
    input.setAttribute("placeholder", "Digite algo!");
    return;
  }
  addProduct();

  function addProduct() {
    //criando o elemento principal.
    const boxItem = document.createElement("div");
    boxItem.classList.add("checkbox");

    // criando o checkbox
    const checkboxButton = document.createElement("input");
    checkboxButton.type = "checkbox";
    checkboxButton.classList.add("checkboxButton");

    // criando o espaço que receberá o valor do produto.
    let nameProduct = document.createElement("label");
    nameProduct.textContent = input.value;
    nameProduct.classList.add("nameProduct");

    // criando o botão de deletar
    const deleteButton = document.createElement("button");
    const div = document.createElement("div");
    deleteButton.classList.add("deleteButton");
    deleteButton.append(div);

    // adicionando os elementos no elemento principal.
    boxItem.append(checkboxButton, nameProduct, deleteButton);

    // adicionando o produto a area de produtos.
    const spaceProduct = document.getElementById("checkboxSpace");
    spaceProduct.append(boxItem);
  }
});
