const form = document.getElementById("expense-form");
const tbody = document.querySelector(".table tbody");
const divTable = document.getElementById("div-table");
const radio0 = document.getElementById("flexRadioDefault0");
const radio1 = document.getElementById("flexRadioDefault1");
const radio2 = document.getElementById("flexRadioDefault2");

form.addEventListener("submit", async (event) => {
    document.querySelectorAll("tbody tr").forEach((tr) => tr.remove());
    event.preventDefault();
    var dataInicio = document.getElementById("begin-date").value;
    var dataFim = document.getElementById("end-date").value;

    var isAprovado = "todos";

    if (radio1.checked) {
        isAprovado = "true";
    } else if (radio2.checked) {
        isAprovado = "false";
    }

    if (dataInicio == "") {
        console.log("entrou");
        dataInicio = "01-01-2000";
    }

    if (dataFim == "") {
        const dataAgora = new Date(Date.now());
        dataAgora.setDate(dataAgora.getDate() + 1);
        dataFim = new Date(dataAgora).toISOString().split("T")[0];
        // dataFim = dataAgora.toISOString().split("T")[0];
    }
    console.log(dataInicio);
    console.log(dataFim);
    const response = await axios.get(
        "http://localhost:3000/reembolso/data/" +
            dataInicio +
            "/" +
            dataFim +
            "/" +
            isAprovado
    );

    const dados = response.data;

    divTable.hidden = false;

    for (let index = 0; index < dados.length; index++) {
        const dado = dados[index];

        const row = document.createElement("tr");
        const protocoloCell = document.createElement("td");
        const descricaoCell = document.createElement("td");
        const valorCell = document.createElement("td");
        const dataCell = document.createElement("td");
        const boolCell = document.createElement("td");
        const dataFimCell = document.createElement("td");

        protocoloCell.textContent = dado.nProtocolo;
        descricaoCell.textContent = dado.descricao;
        valorCell.textContent = Number.parseFloat(
            dado.valorReembolso
        ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        const data = formatarData(dado.dataCriacao);
        dataCell.textContent = data;
        boolCell.textContent =
            dado.isAprovado == true ? "Aprovado" : "Aguardando";
        dataFimCell.textContent = dado.dataFim ? dado.dataFim : "Aguardando";

        row.appendChild(protocoloCell);
        row.appendChild(descricaoCell);
        row.appendChild(valorCell);
        row.appendChild(dataCell);
        row.appendChild(boolCell);
        row.appendChild(dataFimCell);

        tbody.appendChild(row);
    }
});

function formatarData(data) {
    const dataObj = new Date(data);

    const dia = String(dataObj.getUTCDate()).padStart(2, "0");
    const mes = String(dataObj.getUTCMonth() + 1).padStart(2, "0");
    const ano = dataObj.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
}

// axios.get("http://localhost:3000/reembolso/pendente");
