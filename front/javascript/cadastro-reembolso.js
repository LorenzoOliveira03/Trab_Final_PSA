const form = document.getElementById("expense-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valor = document.getElementById("Valor").value;
    const descricao = document.getElementById("Descricao").value;
    const codFuncionario = document.getElementById("CodFuncionario").value;

    const data = {
        valor: valor,
        descricao: descricao,
        codFuncionario: codFuncionario,
    };

    console.log(data);

    console.log("enviando");
    axios.post("http://localhost:3000/reembolso", {
        valorReembolso: valor,
        descricao: descricao,
        funcionarioId: codFuncionario,
    });

    window.location.href =
        "http://127.0.0.1:5500/front/html/reembolso-pendente.html";

    form.reset();
});
