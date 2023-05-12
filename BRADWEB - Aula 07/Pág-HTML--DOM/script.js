function init(){
    // Criar e adicionar um h1
    const h1 = document.createElement("h1");
    h1.innerHTML = "Página HTML utilizando o DOM";
    document.body.appendChild(h1);

    // Criar e adicionar um p
    const p = document.createElement("p");
    p.innerHTML = "Aprendendo HTML Básico com exercício prático";
    document.body.appendChild(p);

    // Criar e adicionar um span
    const span = document.createElement("span");
    span.innerHTML = "Menu:";
    document.body.appendChild(span);

    // Criar um ul
    const ul = document.createElement("ul");
    document.body.appendChild(ul);

        // Criar li "Item 1"
        const li1 = document.createElement("li");
        li1.innerHTML = "Item 1";
        ul.appendChild(li1);

        // Criar li "Item 2"
        const li2 = document.createElement("li");
        li2.innerHTML = "Item 2";
        ul.appendChild(li2);

        // Criar li "Item 3"
        const li3 = document.createElement("li");
        li3.innerHTML = "Item 3";
        ul.appendChild(li3);
}

window.onload = init;