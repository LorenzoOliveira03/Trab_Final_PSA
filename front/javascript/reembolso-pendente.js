// Supondo que você tenha os dados do banco de dados em um array chamado 'dados'
async function getDados() {
    const response = await axios.get(
        "http://localhost:3000/reembolso/pendente"
    );
    return response.data;
}

function formatarData(data) {
    const dataObj = new Date(data);

    const dia = String(dataObj.getUTCDate()).padStart(2, "0");
    const mes = String(dataObj.getUTCMonth() + 1).padStart(2, "0");
    const ano = dataObj.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
}

async function setDados() {
    const dados = await getDados();

    for (let index = 0; index < dados.length; index++) {
        const dado = dados[index];

        const row = document.createElement("tr");
        const descricaoCell = document.createElement("td");
        const valorCell = document.createElement("td");
        const dataCell = document.createElement("td");
        const acaoCell = document.createElement("td");

        descricaoCell.textContent = dado.descricao;
        valorCell.textContent = Number.parseFloat(
            dado.valorReembolso
        ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        const data = formatarData(dado.dataCriacao);
        dataCell.textContent = data;
        // acaoCell.innerHTML = `
        //   <button type="button" class="btn btn-success">Aprovar</button>
        //   <button type="button" class="btn btn-danger">Reprovar</button>
        // `;
        acaoCell.textContent =
            dado.isAprovado == true ? "Aprovado" : "Aguardando";

        row.appendChild(descricaoCell);
        row.appendChild(valorCell);
        row.appendChild(dataCell);
        row.appendChild(acaoCell);

        tbody.appendChild(row);
    }
}

const tbody = document.querySelector(".table tbody");
setDados();
