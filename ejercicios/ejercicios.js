const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];
const fragment = document.createDocumentFragment();


// <li class="list">
//   <b>Nombre: </b> <span class="text-danger">descripción...</span>
// </li>


arrayItem.forEach((item) => {
    const li = document.createElement(`li`);
    li.classList.add(`list`);

    const b = document.createElement(`b`);
    b.textContent = `Nombre: `;

    const span = document.createElement(`span`);
    span.classList.add(`text-danger`);
    span.textContent = item;

    li.append(b, span);

    fragment.appendChild(li);
});

lista.appendChild(fragment);