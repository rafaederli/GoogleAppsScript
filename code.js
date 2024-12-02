function doGet() {
    return HtmlService.createHtmlOutputFromFile("form.html")
        .setWidth(400)
        .setHeight(600);
}

function salvarDadosNaPlanilha(dados) {
    const planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    planilha.appendRow([
        dados.nome,
        dados.dataEntrada,
        dados.tipo,
        dados.status,
        dados.valor,
        dados.vencimento
    ]);
}