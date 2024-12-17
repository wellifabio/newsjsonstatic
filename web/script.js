const uri = "https://newsjsonstatic.vercel.app/";
const news = document.querySelector(".news");

fetch(uri)
.then(response => response.json())
.then(data => {
    data.forEach(n => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
        <h3>${n.title}</h3>
        <p>${n.content}</p>
        <p>
            <button onclick="alterar('${n.id}','${n.title}','${n.content}')">Alterar</button>
            <button onclick="excluir(${n.id})">Excluir</button>
        </p>`;
        news.appendChild(card);
    });
});

function alterar(i, tit, cont) {
    alteracao.classList.remove('oculto');
    id.value = i;
    title.value = tit;
    content.innerHTML = cont;
}