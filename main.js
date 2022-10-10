const items = document.getElementById(`items`);
const templateCard = document.getElementById(`template-card`).content;
const fragment = document.createDocumentFragment();


document.addEventListener(`DOMContentLoaded`, () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch(`./datos.json`)
        const data = await res.json()
        //console.log(data);
        pintarCards(data)
    } catch(error) {
        console.log(error);
    }
}

const pintarCards = data => {
    data.forEach(product => {
       templateCard.querySelector(`h5`).textContent = product.title;
        templateCard.querySelector(`p`).textContent = product.precio;
        templateCard.querySelector(`img`).setAttribute(`src`, product.thumbnailUrl);
        templateCard.querySelector(`.btn-dark`).dataset.id = product.id;
        const clone = templateCard.cloneNode(true);
       fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}