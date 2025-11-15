function calcular() {
    const valorLoja = parseFloat(document.getElementById("valorProduto").value);
    const vendasMensais = parseInt(document.getElementById("vendasMes").value);
    const resultadoEl = document.getElementById("resultado");

    if (isNaN(valorLoja) || isNaN(vendasMensais) || vendasMensais <= 0) {
        resultadoEl.textContent = "⚠️ Por favor, insira valores válidos.";
        return;
    }

    const taxaVenda = 0.23;
    const taxaPagamento = 0.035;
    const mensalidade = 150;
    const taxaTotal = taxaVenda + taxaPagamento;

    const precoSemMensalidade = valorLoja / (1 - taxaTotal);
    const custoMensalidadePorVenda = mensalidade / vendasMensais;
    const precoComMensalidade = (valorLoja + custoMensalidadePorVenda) / (1 - taxaTotal);

    resultadoEl.textContent =
        `💰 Preço sem mensalidade: R$ ${precoSemMensalidade.toFixed(2)}\n` +
        `💼 Preço com mensalidade: R$ ${precoComMensalidade.toFixed(2)}`;
}
